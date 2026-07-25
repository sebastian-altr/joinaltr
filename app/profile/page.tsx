"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import { createClient } from "../../lib/supabase/client";

type Profile = {
  id?: string;
  display_name?: string | null;
  username?: string | null;
  bio?: string | null;
  profile_picture?: string | null;
  communities?: string[] | string | null;
  tier?: string | null;

  // Current fields already in your database
  thumbs_up_count?: number | null;
  days_active?: number | null;
  streak?: number | null;
  communities_helped?: number | null;
  milestones_completed?: number | null;

  // Future fields for the resolution system
  answers_that_worked?: number | null;
  people_related?: number | null;
  resolutions_count?: number | null;
};

type UserPost = {
  id: string;
  title: string;
  body: string;
  status: "open" | "resolved";
  created_at: string;
  community_name: string;
  community_slug: string;
};

const tierStyles: Record<
  string,
  {
    badge: string;
    glow: string;
    progress: string;
  }
> = {
  "New Member": {
    badge: "border-white/10 bg-white/[0.05] text-gray-300",
    glow: "bg-white/5",
    progress: "bg-gray-400",
  },
  Bronze: {
    badge: "border-orange-400/25 bg-orange-400/10 text-orange-300",
    glow: "bg-orange-500/10",
    progress: "bg-orange-400",
  },
  Silver: {
    badge: "border-slate-300/25 bg-slate-300/10 text-slate-200",
    glow: "bg-slate-300/10",
    progress: "bg-slate-300",
  },
  Gold: {
    badge: "border-amber-400/25 bg-amber-400/10 text-amber-300",
    glow: "bg-amber-500/10",
    progress: "bg-amber-400",
  },
  Platinum: {
    badge: "border-cyan-300/25 bg-cyan-300/10 text-cyan-200",
    glow: "bg-cyan-400/10",
    progress: "bg-cyan-300",
  },
  Legend: {
    badge: "border-violet-400/25 bg-violet-400/10 text-violet-300",
    glow: "bg-violet-500/15",
    progress: "bg-violet-400",
  },
};

const tierRequirements = [
  { name: "New Member", minimum: 0 },
  { name: "Bronze", minimum: 5 },
  { name: "Silver", minimum: 20 },
  { name: "Gold", minimum: 50 },
  { name: "Platinum", minimum: 100 },
  { name: "Legend", minimum: 250 },
];

function normalizeCommunities(
  value: Profile["communities"],
): string[] {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (typeof value !== "string" || value.trim() === "") {
    return [];
  }

  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is string => typeof item === "string",
      );
    }
  } catch {
    // The database value may be a comma-separated string.
  }

  return value
    .split(",")
    .map((community) => community.trim())
    .filter(Boolean);
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

function getTierProgress(answerCount: number, currentTier: string) {
  const currentIndex = tierRequirements.findIndex(
    (tier) => tier.name === currentTier,
  );

  if (currentIndex === -1) {
    return {
      percentage: 0,
      nextTier: "Bronze",
      remaining: 5,
    };
  }

  const nextTier = tierRequirements[currentIndex + 1];

  if (!nextTier) {
    return {
      percentage: 100,
      nextTier: null,
      remaining: 0,
    };
  }

  const currentMinimum = tierRequirements[currentIndex].minimum;
  const range = nextTier.minimum - currentMinimum;
  const progressWithinTier = answerCount - currentMinimum;

  return {
    percentage: Math.min(
      100,
      Math.max(0, (progressWithinTier / range) * 100),
    ),
    nextTier: nextTier.name,
    remaining: Math.max(0, nextTier.minimum - answerCount),
  };
}

export default function ProfilePage() {
  const supabase = useMemo(() => createClient(), []);

  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

const [userPosts, setUserPosts] = useState<UserPost[]>([]);
const [workedAnswerCount, setWorkedAnswerCount] = useState(0);

  useEffect(() => {
  let isMounted = true;
async function loadWorkedAnswerCount(userId: string) {
  const { data: userReplies, error: repliesError } = await supabase
    .from("replies")
    .select("id")
    .eq("author_id", userId);

  if (!isMounted) {
    return;
  }

  if (repliesError) {
    console.error(
      "Could not load the user's replies:",
      repliesError,
    );
    setWorkedAnswerCount(0);
    return;
  }

  const replyIds = (userReplies ?? []).map((reply) => reply.id);

  if (replyIds.length === 0) {
    setWorkedAnswerCount(0);
    return;
  }

  const { count, error: workedAnswersError } = await supabase
    .from("posts")
    .select("id", {
      count: "exact",
      head: true,
    })
    .in("worked_reply_id", replyIds);

  if (!isMounted) {
    return;
  }

  if (workedAnswersError) {
    console.error(
      "Could not load answers that worked:",
      workedAnswersError,
    );
    setWorkedAnswerCount(0);
    return;
  }

  setWorkedAnswerCount(count ?? 0);
}
  async function loadProfile() {
    setLoading(true);
    setLoadError("");

    try {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      if (sessionError) {
        console.error("Session error:", sessionError);
        setProfile(null);
        setEmail("");
        setLoading(false);
        return;
      }

      /*
       * Being logged out is a normal state.
       * It should show the login screen instead of an error.
       */
      if (!session?.user) {
        setProfile(null);
        setEmail("");
        setLoading(false);
        return;
      }

      const user = session.user;

setEmail(user.email ?? "");

await loadWorkedAnswerCount(user.id);

if (!isMounted) {
  return;
}

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      if (!isMounted) {
        return;
      }

      if (profileError) {
        console.error("Profile error:", profileError);
        setLoadError(profileError.message);
        setLoading(false);
        return;
      }

      /*
       * If the user is authenticated but does not yet have a profile row,
       * create a safe temporary profile using their account information.
       */
      if (!data) {
        const fallbackUsername =
          user.user_metadata?.username ||
          user.user_metadata?.display_name ||
          user.email?.split("@")[0] ||
          "member";

        setProfile({
          id: user.id,
          display_name:
            user.user_metadata?.display_name || fallbackUsername,
          username: fallbackUsername,
          bio: null,
          profile_picture:
            user.user_metadata?.avatar_url ||
            user.user_metadata?.profile_picture ||
            null,
          communities: [],
          tier: "New Member",
          answers_that_worked: 0,
          people_related: 0,
          days_active: 0,
          streak: 0,
        });

        setLoading(false);
        return;
      }

      setProfile(data);

const { data: posts } = await supabase
  .from("posts")
  .select(`
    id,
    title,
    body,
    status,
    created_at,
    communities (
      name,
      slug
    )
  `)
  .eq("author_id", user.id)
  .order("created_at", { ascending: false });

setUserPosts(
  (posts ?? []).map((post: any) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    status: post.status,
    created_at: post.created_at,
    community_name: post.communities.name,
    community_slug: post.communities.slug,
  }))
);

setLoading(false);
    } catch (error) {
      if (!isMounted) {
        return;
      }

      console.error("Unexpected profile loading error:", error);

      setLoadError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while loading your profile.",
      );

      setLoading(false);
    }
  }

  void loadProfile();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    if (!isMounted) {
      return;
    }

    if (!session?.user) {
      setProfile(null);
      setEmail("");
      setLoadError("");
      setLoading(false);
      return;
    }

    void loadProfile();
  });

  return () => {
    isMounted = false;
    subscription.unsubscribe();
  };
}, [supabase]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
          <div className="animate-pulse">
            <div className="h-4 w-32 rounded-full bg-white/10" />
            <div className="mt-6 h-16 max-w-2xl rounded-2xl bg-white/10" />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <div className="h-80 rounded-[2rem] bg-white/[0.05] lg:col-span-2" />
              <div className="h-80 rounded-[2rem] bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (loadError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="w-full max-w-lg rounded-[2rem] border border-red-400/20 bg-red-400/[0.05] p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            Profile unavailable
          </p>

          <h1 className="mt-4 text-3xl font-semibold">
            We couldn&apos;t load your profile.
          </h1>

          <p className="mt-4 leading-7 text-gray-400">{loadError}</p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Your JoinAltr profile
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Sign in to see your impact.
            </h1>

            <p className="mx-auto mt-5 max-w-lg leading-7 text-gray-400">
              Your questions, communities, answers that worked, and reputation
              will live here.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Log In
              </Link>

              <Link
                href="/signup"
                className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/25"
              >
                Join Open Beta
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const displayName =
    profile.display_name?.trim() ||
    profile.username?.trim() ||
    email.split("@")[0] ||
    "JoinAltr Member";

  const username =
    profile.username?.trim() || email.split("@")[0] || "member";

  /*
   * These fallbacks allow the redesigned page to work before you add
   * the future resolution fields to Supabase.
   */
 const answersThatWorked = workedAnswerCount;

  const peopleRelated = profile.people_related ?? 0;
  const daysShownUp = profile.days_active ?? 0;
  const communities = normalizeCommunities(profile.communities);
  const currentTier = profile.tier || "New Member";

  const tierStyle =
    tierStyles[currentTier] ?? tierStyles["New Member"];

  const tierProgress = getTierProgress(
    answersThatWorked,
    currentTier,
  );

  const isRecentlyActive =
    (profile.streak ?? 0) > 0 || daysShownUp > 0;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Profile hero */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`absolute left-1/3 top-0 h-[500px] w-[650px] rounded-full ${tierStyle.glow} blur-[150px]`}
          />
          <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative shrink-0">
                {profile.profile_picture ? (
                  <img
                    src={profile.profile_picture}
                    alt={`${displayName}'s profile`}
                    className="h-28 w-28 rounded-[2rem] border border-white/15 object-cover shadow-2xl sm:h-32 sm:w-32"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/15 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-3xl font-bold shadow-2xl sm:h-32 sm:w-32">
                    {getInitials(displayName) || "A"}
                  </div>
                )}

                <span
                  className={`absolute -bottom-2 -right-2 h-5 w-5 rounded-full border-4 border-[#050505] ${
                    isRecentlyActive ? "bg-emerald-400" : "bg-gray-600"
                  }`}
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${tierStyle.badge}`}
                  >
                    {currentTier}
                  </span>

                  <span className="flex items-center gap-2 text-xs font-medium text-gray-500">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isRecentlyActive
                          ? "bg-emerald-400"
                          : "bg-gray-600"
                      }`}
                    />

                    {isRecentlyActive
                      ? "Recently active"
                      : "No recent activity"}
                  </span>
                </div>

                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {displayName}
                </h1>

                <p className="mt-2 text-gray-500">@{username}</p>

                {profile.bio ? (
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                    {profile.bio}
                  </p>
                ) : (
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
                    Share what you are working through and what experience you
                    can offer the community.
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
 <div className="flex items-center gap-3">
  <Link
    href="/profile/edit"
    className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold"
  >
    Edit Profile
  </Link>

  <LogoutButton />
</div>

</div>
          </div>
        </div>
      </section>

      {/* Main profile content */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-6">
              {/* Impact stats */}
              <section className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      Your impact
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                      Reputation built around outcomes.
                    </h2>
                  </div>

                  <p className="max-w-sm text-sm leading-6 text-gray-500">
                    Reputation grows when the person asking marks your answer
                    as what actually helped.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-emerald-400/20 bg-emerald-400/[0.055] p-6">
                    <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-400/10 blur-[55px]" />

                    <div className="relative">
                      <p className="text-4xl font-semibold tracking-tight text-white">
                        {answersThatWorked}
                      </p>

                      <p className="mt-3 text-sm font-semibold text-emerald-300">
                        Answers That Worked
                      </p>

                      <p className="mt-2 text-xs leading-5 text-gray-500">
                        Advice selected after someone tried it.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-6">
                    <p className="text-4xl font-semibold tracking-tight text-white">
                      {peopleRelated}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-gray-300">
                      People Related
                    </p>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      People who saw themselves in your experience.
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-6">
                    <p className="text-4xl font-semibold tracking-tight text-white">
                      {daysShownUp}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-gray-300">
                      Days Shown Up
                    </p>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      Days spent participating in the community.
                    </p>
                  </div>
                </div>
              </section>

              {/* Activity */}
              <section className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                      Recent contributions
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                      Your activity
                    </h2>
                  </div>

                  
                </div>

                <div className="mt-7 divide-y divide-white/10">
                  {userPosts.length === 0 ? (
  <p className="text-gray-500">
    You haven't created any posts yet.
  </p>
) : (
  userPosts.map((post) => (
                    <article
  key={post.id}
  className="group py-6 first:pt-0 last:pb-0"
>
  <Link href={`/posts/${post.id}`}>

    <div className="flex items-center justify-between">

      <div>
        <p className="font-semibold text-white">
          {post.title}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {post.community_name}
        </p>
      </div>

      {post.status === "resolved" ? (
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          ✓ Resolved
        </span>
      ) : (
        <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
          Open
        </span>
      )}

    </div>

    <p className="mt-4 line-clamp-2 text-gray-400">
      {post.body}
    </p>

  </Link>
</article>
                  ))
)}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              {/* Tier progress */}
              <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
                <div
                  className={`pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full ${tierStyle.glow} blur-[75px]`}
                />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Reputation tier
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span
                      className={`rounded-full border px-4 py-2 text-sm font-semibold ${tierStyle.badge}`}
                    >
                      {currentTier}
                    </span>

                    <span className="text-sm text-gray-500">
                      {answersThatWorked} worked
                    </span>
                  </div>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${tierStyle.progress}`}
                      style={{
                        width: `${tierProgress.percentage}%`,
                      }}
                    />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    {tierProgress.nextTier
                      ? `${tierProgress.remaining} more ${
                          tierProgress.remaining === 1
                            ? "answer"
                            : "answers"
                        } marked as worked to reach ${tierProgress.nextTier}.`
                      : "You have reached the highest reputation tier."}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-xs leading-5 text-gray-600">
                      A tier reflects confirmed outcomes, not universal proof
                      that advice will work for everyone.
                    </p>
                  </div>
                </div>
              </section>

              {/* Communities */}
              <section className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Communities
                    </p>

                    <h2 className="mt-2 text-xl font-semibold">
                      Where you show up
                    </h2>
                  </div>

                  <Link
                    href="/communities"
                    className="text-sm font-semibold text-gray-400 transition hover:text-white"
                  >
                    Explore
                  </Link>
                </div>

                {communities.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {communities.map((community) => (
                      <Link
                        key={community}
                        href={`/communities/${community
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-white/25 hover:text-white"
                      >
                        {community}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-5">
                    <p className="text-sm leading-6 text-gray-500">
                      You have not selected any communities yet.
                    </p>

                    <Link
                      href="/communities"
                      className="mt-4 inline-flex text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                    >
                      Find your communities →
                    </Link>
                  </div>
                )}
              </section>

              {/* Profile principle */}
              <section className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.045] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  ✓
                </span>

                <h2 className="mt-5 text-xl font-semibold">
                  Your profile should mean something.
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  JoinAltr profiles are designed to show where you contributed,
                  who related, and which answers produced a real outcome.
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}