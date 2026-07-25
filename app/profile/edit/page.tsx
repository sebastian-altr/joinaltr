"use client";

import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";

const communityOptions = [
  "Fitness",
  "Nutrition",
  "Confidence",
  "Skincare",
];

type ProfileForm = {
  displayName: string;
  username: string;
  bio: string;
  location: string;
  profilePicture: string;
  mission: string;
  missionDescription: string;
  missionProgress: number;
  visibility: "public" | "private";
};

const initialForm: ProfileForm = {
  displayName: "",
  username: "",
  bio: "",
  location: "",
  profilePicture: "",
  mission: "",
  missionDescription: "",
  missionProgress: 0,
  visibility: "public",
};

export default function EditProfilePage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [form, setForm] = useState<ProfileForm>(initialForm);
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);

  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      setIsLoading(true);
      setErrorMessage("");

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        setErrorMessage(sessionError.message);
        setIsLoading(false);
        return;
      }

      const user = session?.user;

      if (!user) {
        router.push("/login");
        return;
      }

      setUserId(user.id);
      setEmail(user.email ?? "");

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select(
          `
            display_name,
            username,
            bio,
            location,
            profile_picture,
            mission,
            mission_description,
            mission_progress,
            communities,
            visibility
          `
        )
        .eq("id", user.id)
        .maybeSingle();

      if (profileError) {
        setErrorMessage(profileError.message);
        setIsLoading(false);
        return;
      }

      setForm({
        displayName:
          profile?.display_name ??
          user.user_metadata?.display_name ??
          "",
        username:
          profile?.username ??
          user.user_metadata?.username ??
          "",
        bio: profile?.bio ?? "",
        location: profile?.location ?? "",
        profilePicture: profile?.profile_picture ?? "",
        mission: profile?.mission ?? "",
        missionDescription: profile?.mission_description ?? "",
        missionProgress: profile?.mission_progress ?? 0,
        visibility:
          profile?.visibility === "private" ? "private" : "public",
      });

      setSelectedCommunities(
        Array.isArray(profile?.communities)
          ? profile.communities
          : []
      );

      setIsLoading(false);
    }

    loadProfile();
  }, [router, supabase]);

  function updateField<K extends keyof ProfileForm>(
    field: K,
    value: ProfileForm[K]
  ) {
    setSaved(false);
    setErrorMessage("");

    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleCommunity(community: string) {
    setSaved(false);
    setErrorMessage("");

    setSelectedCommunities((current) =>
      current.includes(community)
        ? current.filter((item) => item !== community)
        : [...current, community]
    );
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!userId) {
      setErrorMessage(
        "Your account could not be found. Please sign in again."
      );
      return;
    }

    const cleanedUsername = form.username
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9._-]/g, "");

    if (!form.displayName.trim()) {
      setErrorMessage("Please enter a display name.");
      return;
    }

    if (!cleanedUsername) {
      setErrorMessage("Please enter a valid username.");
      return;
    }

    setIsSaving(true);
    setSaved(false);
    setErrorMessage("");

    const { data: usernameOwner, error: usernameCheckError } =
      await supabase
        .from("profiles")
        .select("id")
        .eq("username", cleanedUsername)
        .neq("id", userId)
        .maybeSingle();

    if (usernameCheckError) {
      setErrorMessage(usernameCheckError.message);
      setIsSaving(false);
      return;
    }

    if (usernameOwner) {
      setErrorMessage(
        "That username is already being used. Please choose another one."
      );
      setIsSaving(false);
      return;
    }

    const { error } = await supabase.from("profiles").upsert(
      {
        id: userId,
        email,
        display_name: form.displayName.trim(),
        username: cleanedUsername,
        bio: form.bio.trim(),
        location: form.location.trim(),
        profile_picture: form.profilePicture.trim() || null,
        mission: form.mission.trim(),
        mission_description: form.missionDescription.trim(),
        mission_progress: form.missionProgress,
        communities: selectedCommunities,
        visibility: form.visibility,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "id",
      }
    );

    if (error) {
      setErrorMessage(error.message);
      setIsSaving(false);
      return;
    }

    setForm((current) => ({
      ...current,
      username: cleanedUsername,
    }));

    setSaved(true);
    setIsSaving(false);

    router.push("/profile");
    router.refresh();
  }

  const initials =
    form.displayName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "JA";

  if (isLoading) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 py-20 text-white sm:px-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-400/[0.08] blur-[150px]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="animate-pulse rounded-[36px] border border-white/10 bg-white/[0.03] p-10">
            <div className="h-4 w-32 rounded-full bg-white/10" />
            <div className="mt-7 h-14 max-w-xl rounded-2xl bg-white/10" />
            <div className="mt-5 h-6 max-w-2xl rounded-xl bg-white/[0.06]" />
            <div className="mt-12 h-72 rounded-[28px] bg-white/[0.05]" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 py-16 text-white sm:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-emerald-400/[0.07] blur-[160px]" />

      <div className="pointer-events-none absolute -right-64 top-[420px] -z-10 h-[550px] w-[550px] rounded-full bg-violet-400/[0.08] blur-[160px]" />

      <div className="mx-auto max-w-5xl">
        <a
          href="/profile"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
        >
          <span>←</span>
          Back to profile
        </a>

        <div className="mt-10 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Profile settings
            </span>
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            Build a profile that reflects where you&apos;re going.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Share your mission, interests, and the experiences that
            shape what you contribute to JoinAltr.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-400/[0.08] blur-[100px]" />

            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="relative">
                {form.profilePicture ? (
                  <img
                    src={form.profilePicture}
                    alt={form.displayName || "Profile"}
                    className="h-32 w-32 rounded-full border border-white/10 object-cover shadow-2xl shadow-black/50"
                  />
                ) : (
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-400/25 via-teal-400/10 to-violet-400/20 text-4xl font-bold shadow-2xl shadow-black/50">
                    {initials}
                  </div>
                )}

                <div className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#111111] bg-emerald-400 text-sm font-bold text-black">
                  ✓
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Profile image
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  Choose how members see you
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-gray-400">
                  Paste a direct image URL below. Dedicated photo
                  uploads can be added later with Supabase Storage.
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="profilePicture"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Profile image URL
                  </label>

                  <input
                    id="profilePicture"
                    type="url"
                    value={form.profilePicture}
                    onChange={(event) =>
                      updateField(
                        "profilePicture",
                        event.target.value
                      )
                    }
                    placeholder="https://example.com/photo.jpg"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-emerald-400/70 focus:bg-black/60"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[36px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Identity
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  Basic information
                </h2>
              </div>

              <p className="text-sm text-gray-600">{email}</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="displayName"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Display name
                </label>

                <input
                  id="displayName"
                  type="text"
                  value={form.displayName}
                  required
                  maxLength={60}
                  onChange={(event) =>
                    updateField("displayName", event.target.value)
                  }
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-emerald-400/70 focus:bg-black/60"
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Username
                </label>

                <div className="flex rounded-2xl border border-white/10 bg-black/40 transition focus-within:border-emerald-400/70 focus-within:bg-black/60">
                  <span className="flex items-center pl-5 text-gray-600">
                    @
                  </span>

                  <input
                    id="username"
                    type="text"
                    value={form.username}
                    required
                    maxLength={30}
                    onChange={(event) =>
                      updateField("username", event.target.value)
                    }
                    placeholder="username"
                    className="w-full bg-transparent px-2 py-4 pr-5 text-white outline-none placeholder:text-gray-700"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-300"
                >
                  Bio
                </label>

                <span className="text-xs text-gray-600">
                  {form.bio.length}/160
                </span>
              </div>

              <textarea
                id="bio"
                rows={4}
                value={form.bio}
                maxLength={160}
                onChange={(event) =>
                  updateField("bio", event.target.value)
                }
                placeholder="Share what you're working toward..."
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-emerald-400/70 focus:bg-black/60"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Location
              </label>

              <input
                id="location"
                type="text"
                value={form.location}
                maxLength={100}
                onChange={(event) =>
                  updateField("location", event.target.value)
                }
                placeholder="New York, United States"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-emerald-400/70 focus:bg-black/60"
              />
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[36px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-violet-400/[0.05] p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/[0.08] blur-[100px]" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Current mission
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                What are you becoming?
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                Give your profile a clear direction. This appears
                prominently on your public profile.
              </p>

              <div className="mt-8">
                <label
                  htmlFor="mission"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Mission title
                </label>

                <input
                  id="mission"
                  type="text"
                  value={form.mission}
                  maxLength={120}
                  onChange={(event) =>
                    updateField("mission", event.target.value)
                  }
                  placeholder="Build a stronger and more consistent life."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-emerald-400/70 focus:bg-black/60"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="missionDescription"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Mission description
                </label>

                <textarea
                  id="missionDescription"
                  rows={4}
                  value={form.missionDescription}
                  maxLength={400}
                  onChange={(event) =>
                    updateField(
                      "missionDescription",
                      event.target.value
                    )
                  }
                  placeholder="Describe the changes you're working toward..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-emerald-400/70 focus:bg-black/60"
                />
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="missionProgress"
                    className="text-sm font-medium text-gray-300"
                  >
                    Mission progress
                  </label>

                  <span className="text-sm font-semibold text-emerald-300">
                    {form.missionProgress}%
                  </span>
                </div>

                <input
                  id="missionProgress"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={form.missionProgress}
                  onChange={(event) =>
                    updateField(
                      "missionProgress",
                      Number(event.target.value)
                    )
                  }
                  className="mt-5 w-full accent-emerald-400"
                />

                <div className="mt-3 flex justify-between text-xs text-gray-600">
                  <span>Starting</span>
                  <span>In progress</span>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[36px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Interests
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Your communities
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-400">
              Select the areas where you want to learn, contribute,
              and share what worked.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {communityOptions.map((community) => {
                const selected =
                  selectedCommunities.includes(community);

                return (
                  <button
                    key={community}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleCommunity(community)}
                    className={`group flex items-center justify-between rounded-2xl border px-5 py-5 text-left transition duration-300 ${
                      selected
                        ? "border-emerald-400/40 bg-emerald-400/10 shadow-lg shadow-emerald-950/20"
                        : "border-white/10 bg-black/20 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{community}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {selected ? "Added to profile" : "Not selected"}
                      </p>
                    </div>

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition ${
                        selected
                          ? "bg-emerald-400 text-black"
                          : "border border-white/10 text-gray-600 group-hover:border-white/30 group-hover:text-white"
                      }`}
                    >
                      {selected ? "✓" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rounded-[36px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Privacy
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Profile visibility
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {(["public", "private"] as const).map((option) => {
                const selected = form.visibility === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      updateField("visibility", option)
                    }
                    className={`rounded-2xl border p-6 text-left transition ${
                      selected
                        ? "border-emerald-400/40 bg-emerald-400/10"
                        : "border-white/10 bg-black/20 hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold capitalize">
                        {option} profile
                      </p>

                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                          selected
                            ? "border-emerald-400 bg-emerald-400 text-xs font-bold text-black"
                            : "border-white/20"
                        }`}
                      >
                        {selected ? "✓" : ""}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {option === "public"
                        ? "Other JoinAltr members can see your profile, mission, and communities."
                        : "Your profile information remains visible only to you."}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {errorMessage && (
            <div className="rounded-2xl border border-red-400/25 bg-red-400/10 px-5 py-4 text-sm leading-6 text-red-200">
              <strong className="font-semibold">
                Could not save profile:
              </strong>{" "}
              {errorMessage}
            </div>
          )}

          {saved && (
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-emerald-200">
              Your profile was saved successfully.
            </div>
          )}

          <div className="sticky bottom-5 z-20 rounded-[28px] border border-white/10 bg-black/75 p-4 shadow-2xl shadow-black/60 backdrop-blur-2xl">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="px-2 text-sm text-gray-500">
                Changes are saved to your JoinAltr profile.
              </p>

              <div className="flex flex-col-reverse gap-3 sm:flex-row">
                <a
                  href="/profile"
                  className="rounded-full border border-white/10 px-7 py-3.5 text-center text-sm font-semibold transition hover:border-white/30 hover:bg-white/[0.04]"
                >
                  Cancel
                </a>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "Save Profile"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}