import { motion } from "framer-motion";
import { Star, GitFork, Users, FolderGit2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { GITHUB_USERNAME } from "@/data/github";
import { leetcodeStats } from "@/data/leetcode";

function StatSkeleton() {
  return <div className="h-8 w-16 animate-pulse rounded-md bg-border" />;
}

export function GitHubStats() {
  const { stats, topRepos, loading, error } = useGitHubStats();

  const leetcodeTotal = leetcodeStats.easySolved + leetcodeStats.mediumSolved + leetcodeStats.hardSolved;

  return (
    <section id="github" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Open Source & Problem Solving"
          title="GitHub activity, live from the source."
          description="Pulled directly from the GitHub API — not a screenshot."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Summary stat cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-1 lg:grid-cols-1">
            <GlassCard hover={false} className="flex flex-col items-start gap-2">
              <Users size={18} className="text-primary" />
              {loading ? <StatSkeleton /> : (
                <p className="font-display text-2xl font-bold">{error ? "—" : stats?.followers}</p>
              )}
              <p className="text-xs text-muted">Followers</p>
            </GlassCard>
            <GlassCard hover={false} className="flex flex-col items-start gap-2">
              <FolderGit2 size={18} className="text-secondary" />
              {loading ? <StatSkeleton /> : (
                <p className="font-display text-2xl font-bold">{error ? "—" : stats?.publicRepos}</p>
              )}
              <p className="text-xs text-muted">Public Repos</p>
            </GlassCard>
            <GlassCard hover={false} className="flex flex-col items-start gap-2">
              <Star size={18} className="text-accent" />
              {loading ? <StatSkeleton /> : (
                <p className="font-display text-2xl font-bold">{error ? "—" : stats?.totalStars}</p>
              )}
              <p className="text-xs text-muted">Total Stars</p>
            </GlassCard>
            <GlassCard hover={false} className="flex flex-col items-start gap-2">
              <GitFork size={18} className="text-success" />
              <p className="font-display text-2xl font-bold">{GITHUB_USERNAME}</p>
              <p className="text-xs text-muted">Username</p>
            </GlassCard>
          </div>

          {/* Contribution graph + top repos */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <GlassCard hover={false} className="overflow-x-auto">
              <p className="mb-4 text-sm font-semibold text-muted">Contribution Activity</p>
              <img
                src={`https://ghchart.rshah.org/6366F1/${GITHUB_USERNAME}`}
                alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
                className="w-full min-w-[600px]"
                loading="lazy"
              />
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {loading &&
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="glass-card h-28 animate-pulse rounded-2xl" />
                ))}
              {!loading &&
                !error &&
                topRepos.map((repo, index) => (
                  <motion.a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="glass-card rounded-2xl p-5 transition-colors hover:border-primary/40"
                  >
                    <p className="truncate font-semibold">{repo.name}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-muted">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                      {repo.language && <Badge>{repo.language}</Badge>}
                      <span className="flex items-center gap-1">
                        <Star size={12} /> {repo.stargazers_count}
                      </span>
                    </div>
                  </motion.a>
                ))}
              {error && (
                <p className="col-span-2 py-6 text-center text-sm text-muted">
                  Couldn't reach the GitHub API right now — check back shortly.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* LeetCode */}
        <div className="mt-20">
          <h3 className="mb-8 font-display text-2xl font-bold">LeetCode</h3>
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard hover={false} className="flex flex-col items-center justify-center text-center">
              <div className="relative flex h-32 w-32 items-center justify-center">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-border)" strokeWidth="10" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="url(#leetcode-gradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={
                      2 * Math.PI * 52 * (1 - leetcodeTotal / leetcodeStats.totalProblems)
                    }
                  />
                  <defs>
                    <linearGradient id="leetcode-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-display text-2xl font-bold">{leetcodeTotal}</span>
                  <span className="text-[11px] text-muted">Solved</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted">
                out of {leetcodeStats.totalProblems.toLocaleString()} problems
              </p>
            </GlassCard>

            <GlassCard hover={false}>
              <p className="text-sm font-semibold text-muted">Difficulty Breakdown</p>
              <div className="mt-5 flex flex-col gap-4">
                {[
                  { label: "Easy", value: leetcodeStats.easySolved, color: "bg-success" },
                  { label: "Medium", value: leetcodeStats.mediumSolved, color: "bg-secondary" },
                  { label: "Hard", value: leetcodeStats.hardSolved, color: "bg-accent" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-muted">
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className={`h-full rounded-full ${row.color}`}
                        style={{ width: `${(row.value / leetcodeTotal) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs text-muted">Contest Rating</p>
                <p className="font-display text-2xl font-bold text-primary">
                  {leetcodeStats.contestRating}
                </p>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <p className="text-sm font-semibold text-muted">Favorite Topics</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {leetcodeStats.favoriteTopics.map((topic) => (
                  <Badge key={topic} variant="primary">
                    {topic}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
