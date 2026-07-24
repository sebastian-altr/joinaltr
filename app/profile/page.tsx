"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

type Profile = {
  id: string;
  email: string | null;
  display_name: string | null;
  username: string | null;
  bio: string | null;
  mission: string | null;
  mission_description: string | null;
  mission_progress: number | null;
  location: string | null;
  profile_picture: string | null;
  communities: string[] | null;
  visibility: string | null;
  communities_helped: number | null;
  streak: number | null;
  days_active: number | null;
  milestones_completed: number | null;
  thumbs_up_count: number;
  tier: string;
  created_at: string;
  updated_at: string | null;
};

type CommunityStyle = {
  description: string;
  accent: string;
  background: string;
  border: string;
};

const communityStyles: Record<string, CommunityStyle> = {
  fitness: {
    description: "Building strength and staying consistent.",
    accent: "text-emerald-400",
    background: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  nutrition: {
    description: "Creating healthier, sustainable eating habits.",
    accent: "text-orange-300",
    background: "bg-orange-300/10",
    border: "border-orange-300/20",
  },
  confidence: {
    description: "Becoming more comfortable taking action.",
    accent: "text-violet-400",
    background: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  skincare: {
    description: "Building healthier and more confident skincare habits.",
    accent: "text-sky-300",
    background: "bg-sky-300/10",
    border: "border-sky-300/20",
  },
};

const defaultCommunityStyle: CommunityStyle = {
  description: "Growing alongside other members of JoinAltr.",
  accent: "text-emerald-400",
  background: "bg-emerald-400/10",
  border: "border-emerald-400/20",
};

const recentActivity = [
  {
    type: "Daily check-in",
    title: "Completed today’s fitness check-in",
    detail: "Upper-body workout and 20 minutes of cardio.",
    time: "Today",
  },
  {
    type: "Goal progress",
    title: "Updated current mission",
    detail: "Continued making progress toward a personal goal.",
    time: "2 days ago",
  },
  {
    type: "Community",
    title: "Connected with the JoinAltr community",
    detail: "Shared progress and supported another member.",
    time: "5 days ago",
  },
];

function formatCommunityName(community: string) {
  return community
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function clampProgress(progress: number | null) {
  if (progress === null) {
    return 0;
  }

  return Math.min(Math.max(progress, 0), 100);
}

export default function ProfilePage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      setIsLoading(true);
      setErrorMessage("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace("/login");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select(
          `
            id,
            email,
            display_name,
            username,
            bio,
            mission,
            mission_description,
            mission_progress,
            location,
            profile_picture,
            communities,
            visibility,
            communities_helped,
            streak,
            days_active,
            milestones_completed,
            thumbs_up_count,
            tier,
            created_at,
            updated_at
          `,
        )
        .eq("id", user.id)
        .single();

      if (!isMounted) {
        return;
      }

      if (error) {
        console.error("Profile loading error:", error);
        setErrorMessage(
          "We could not load your profile. Make sure this account has a row in the profiles table.",
        );
        setIsLoading(false);
        return;
      }

      setProfile(data as Profile);
      setIsLoading(false);
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, [router, supabase]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-emerald-400" />
          <p className="mt-4 text-gray-400">Loading profile...</p>
        </div>
      </main>
    );
  }

  if (errorMessage || !profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="max-w-lg rounded-3xl border border-red-400/20 bg-red-400/10 p-8 text-center">
          <h1 className="text-2xl font-bold">Profile unavailable</h1>

          <p className="mt-4 leading-7 text-gray-300">
            {errorMessage || "Profile not found."}
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-white/30 hover:bg-white/5"
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  const displayName =
    profile.display_name?.trim() ||
    profile.username?.trim() ||
    profile.email?.split("@")[0] ||
    "New Member";

  const username = profile.username?.trim();

  const initials =
    displayName
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  const memberSince = new Date(profile.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const missionProgress = clampProgress(profile.mission_progress);

  const communities = Array.isArray(profile.communities)
    ? profile.communities.filter(Boolean)
    : [];

  const milestoneItems = [
    {
      date: memberSince,
      title: "Joined JoinAltr",
      description: "Started building a more consistent version of myself.",
    },
    ...(profile.streak && profile.streak >= 7
      ? [
          {
            date: "Recent milestone",
            title: `Completed a ${profile.streak}-day streak`,
            description:
              "Continued showing up and making progress consistently.",
          },
        ]
      : []),
    ...(profile.milestones_completed && profile.milestones_completed > 0
      ? [
          {
            date: "Current progress",
            title: `${profile.milestones_completed} ${
              profile.milestones_completed === 1 ? "milestone" : "milestones"
            } completed`,
            description:
              "Reached meaningful checkpoints while working toward personal goals.",
          },
        ]
      : []),
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-7 py-10 sm:px-12 lg:px-16 lg:py-14">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
              {profile.profile_picture ? (
                <img
                  src={profile.profile_picture}
                  alt={`${displayName}'s profile`}
                  className="h-28 w-28 shrink-0 rounded-full border border-white/10 object-cover"
                />
              ) : (
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-400/20 to-violet-400/20 text-4xl font-bold">
                  {initials}
                </div>
              )}

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {displayName}
                  </h1>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    {profile.tier || "New Member"}
                  </span>
                </div>

                {username && (
                  <p className="mt-2 text-gray-500">@{username}</p>
                )}

                <p className="mt-3 font-semibold text-gray-300">
                  {profile.thumbs_up_count ?? 0} 👍
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                  {profile.bio || "This member has not added a bio yet."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
                  <span>Member since {memberSince}</span>

                  <span className="text-gray-700">•</span>

                  <span>{profile.location || "Location not added"}</span>
                </div>
              </div>
            </div>

            <a
              href="/profile/edit"
              className="rounded-full border border-white/10 px-7 py-3 text-center font-semibold transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              Edit Profile
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Current streak</p>

            <p className="mt-3 text-4xl font-bold">{profile.streak ?? 0}</p>

            <p className="mt-2 text-sm text-emerald-400">days in a row</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Days active</p>

            <p className="mt-3 text-4xl font-bold">
              {profile.days_active ?? 0}
            </p>

            <p className="mt-2 text-sm text-gray-400">since joining</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Milestones</p>

            <p className="mt-3 text-4xl font-bold">
              {profile.milestones_completed ?? 0}
            </p>

            <p className="mt-2 text-sm text-gray-400">completed</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Communities</p>

            <p className="mt-3 text-4xl font-bold">{communities.length}</p>

            <p className="mt-2 text-sm text-gray-400">currently joined</p>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Current mission
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                {profile.mission || "No current mission added yet."}
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                {profile.mission_description ||
                  "Add a mission description to explain what you are working toward."}
              </p>

              <div className="mt-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Mission progress</span>

                  <span className="font-semibold text-emerald-400">
                    {missionProgress}%
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                    style={{ width: `${missionProgress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                    Communities
                  </p>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight">
                    Where I am growing
                  </h2>
                </div>

                <a
                  href="/communities"
                  className="hidden text-sm font-semibold text-gray-400 transition hover:text-white sm:block"
                >
                  Explore all →
                </a>
              </div>

              {communities.length > 0 ? (
                <div className="mt-8 grid gap-4">
                  {communities.map((community) => {
                    const slug = community
                      .trim()
                      .toLowerCase()
                      .replace(/\s+/g, "-");

                    const style =
                      communityStyles[slug] || defaultCommunityStyle;

                    return (
                      <a
                        key={community}
                        href={`/communities/${slug}`}
                        className={`group rounded-[24px] border p-6 transition hover:-translate-y-0.5 ${style.border} ${style.background}`}
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h3 className="text-2xl font-semibold">
                              {formatCommunityName(community)}
                            </h3>

                            <p className="mt-3 leading-7 text-gray-400">
                              {style.description}
                            </p>
                          </div>

                          <span
                            className={`text-xl transition group-hover:translate-x-1 ${style.accent}`}
                          >
                            →
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-8 rounded-[24px] border border-dashed border-white/10 p-8 text-center">
                  <p className="text-gray-400">
                    You have not joined any communities yet.
                  </p>

                  <a
                    href="/communities"
                    className="mt-4 inline-block font-semibold text-emerald-400 transition hover:text-emerald-300"
                  >
                    Explore communities →
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                Recent activity
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Showing up consistently
              </h2>

              <div className="mt-8 divide-y divide-white/10">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.title}
                    className="grid gap-4 py-6 sm:grid-cols-[140px_1fr_auto]"
                  >
                    <p className="text-sm font-semibold text-emerald-400">
                      {activity.type}
                    </p>

                    <div>
                      <h3 className="font-semibold">{activity.title}</h3>

                      <p className="mt-2 leading-7 text-gray-400">
                        {activity.detail}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[32px] border border-violet-400/20 bg-violet-400/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                Profile identity
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight">
                {profile.tier || "New Member"}
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Earned through positive contributions and support given to
                other JoinAltr members.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-gray-400">Community appreciation</p>

                <p className="mt-2 text-3xl font-bold">
                  {profile.thumbs_up_count ?? 0} 👍
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                Milestone timeline
              </p>

              <div className="mt-8 space-y-8">
                {milestoneItems.map((milestone, index) => (
                  <div
                    key={`${milestone.date}-${milestone.title}`}
                    className="relative pl-8"
                  >
                    {index !== milestoneItems.length - 1 && (
                      <div className="absolute left-[7px] top-5 h-[calc(100%+32px)] w-px bg-white/10" />
                    )}

                    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-emerald-400/40 bg-emerald-400" />

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                      {milestone.date}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                Profile principles
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Progress over popularity",
                  "Consistency over perfection",
                  "Contribution over attention",
                ].map((principle) => (
                  <div
                    key={principle}
                    className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <p className="font-medium">{principle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm text-gray-500">Communities helped</p>

              <p className="mt-3 text-4xl font-bold">
                {profile.communities_helped ?? 0}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                positive contributions
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}