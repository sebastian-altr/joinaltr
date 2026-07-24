"use client";

import { FormEvent, useState } from "react";

const communityOptions = [
  "Fitness",
  "Nutrition",
  "Confidence",
  "Skincare",
];

export default function EditProfilePage() {
  const [selectedCommunities, setSelectedCommunities] = useState([
    "Fitness",
    "Nutrition",
    "Confidence",
  ]);

  const [saved, setSaved] = useState(false);

  function toggleCommunity(community: string) {
    setSaved(false);

    setSelectedCommunities((current) =>
      current.includes(community)
        ? current.filter((item) => item !== community)
        : [...current, community]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Temporary visual behavior.
    // Supabase will replace this once accounts and the database are connected.
    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-4xl">
        <a
          href="/profile"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back to Profile
        </a>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Profile settings
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Make your profile yours.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Share what you are working toward and choose the communities that
            matter most to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-400/20 to-violet-400/20 text-4xl font-bold">
                SE
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Profile picture</h2>

                <p className="mt-2 max-w-xl leading-7 text-gray-400">
                  Uploading images will become functional when Supabase Storage
                  is connected.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                  >
                    Upload photo
                  </button>

                  <button
                    type="button"
                    className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-white/30 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <h2 className="text-2xl font-semibold">Basic information</h2>

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
                  name="displayName"
                  type="text"
                  defaultValue="Sebastian"
                  required
                  onChange={() => setSaved(false)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Username
                </label>

                <div className="flex rounded-xl border border-white/10 bg-black/40 focus-within:border-emerald-400">
                  <span className="flex items-center pl-4 text-gray-600">@</span>

                  <input
                    id="username"
                    name="username"
                    type="text"
                    defaultValue="sebastian"
                    required
                    onChange={() => setSaved(false)}
                    className="w-full bg-transparent px-2 py-3 text-white outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="bio"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Bio
              </label>

              <textarea
                id="bio"
                name="bio"
                rows={4}
                maxLength={160}
                defaultValue="Building strength, confidence, and better habits one day at a time."
                onChange={() => setSaved(false)}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              />

              <p className="mt-2 text-sm text-gray-600">
                Maximum 160 characters
              </p>
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
                name="location"
                type="text"
                defaultValue="New York, United States"
                onChange={() => setSaved(false)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              />
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Current mission
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              What are you becoming?
            </h2>

            <div className="mt-7">
              <label
                htmlFor="mission"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Mission title
              </label>

              <input
                id="mission"
                name="mission"
                type="text"
                defaultValue="Build a stronger body and a more consistent life."
                required
                onChange={() => setSaved(false)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
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
                name="missionDescription"
                rows={4}
                defaultValue="My focus is building strength, improving nutrition, and getting more comfortable taking action before I feel completely ready."
                onChange={() => setSaved(false)}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="missionProgress"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Current progress
              </label>

              <select
                id="missionProgress"
                name="missionProgress"
                defaultValue="64"
                onChange={() => setSaved(false)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              >
                <option value="0">Just starting</option>
                <option value="25">Making early progress</option>
                <option value="50">Halfway there</option>
                <option value="64">Making steady progress</option>
                <option value="75">Getting close</option>
                <option value="100">Mission completed</option>
              </select>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <h2 className="text-2xl font-semibold">Your communities</h2>

            <p className="mt-3 leading-7 text-gray-400">
              Select the areas where you are currently focused on growing.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {communityOptions.map((community) => {
                const selected = selectedCommunities.includes(community);

                return (
                  <button
                    key={community}
                    type="button"
                    onClick={() => toggleCommunity(community)}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-5 text-left transition ${
                      selected
                        ? "border-emerald-400/40 bg-emerald-400/10"
                        : "border-white/10 bg-black/20 hover:border-white/30"
                    }`}
                  >
                    <span className="font-semibold">{community}</span>

                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
                        selected
                          ? "bg-emerald-400 text-black"
                          : "border border-white/10 text-gray-600"
                      }`}
                    >
                      {selected ? "✓" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>

            <input
              type="hidden"
              name="communities"
              value={selectedCommunities.join(",")}
            />
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <h2 className="text-2xl font-semibold">Profile visibility</h2>

            <div className="mt-7 space-y-4">
              <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  defaultChecked
                  className="mt-1"
                />

                <div>
                  <p className="font-semibold">Public profile</p>
                  <p className="mt-2 leading-7 text-gray-400">
                    Other JoinAltr members can view your mission, communities,
                    milestones, and activity.
                  </p>
                </div>
              </label>

              <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  className="mt-1"
                />

                <div>
                  <p className="font-semibold">Private profile</p>
                  <p className="mt-2 leading-7 text-gray-400">
                    Your profile and progress remain visible only to you.
                  </p>
                </div>
              </label>
            </div>
          </section>

          {saved && (
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-emerald-300">
              Profile changes saved in the visual prototype.
            </div>
          )}

          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
            <a
              href="/profile"
              className="rounded-full border border-white/10 px-8 py-4 text-center font-semibold transition hover:border-white/30"
            >
              Cancel
            </a>

            <button
              type="submit"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}