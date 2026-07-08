import { useEffect, useState } from "react";
import { GITHUB_USERNAME } from "@/data/github";
import type { GitHubStats } from "@/types";

interface GitHubApiUser {
  followers: number;
  public_repos: number;
}

interface GitHubApiRepo {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Swift: "#f05138",
  Python: "#3572A5",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

interface UseGitHubStatsResult {
  stats: GitHubStats | null;
  topRepos: GitHubApiRepo[];
  loading: boolean;
  error: boolean;
}

export function useGitHubStats(): UseGitHubStatsResult {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [topRepos, setTopRepos] = useState<GitHubApiRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const user: GitHubApiUser = await userRes.json();
        const repos: GitHubApiRepo[] = await reposRes.json();

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        const languageCounts: Record<string, number> = {};
        repos.forEach((repo) => {
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
          }
        });
        const totalLangCount = Object.values(languageCounts).reduce((a, b) => a + b, 0) || 1;
        const topLanguages = Object.entries(languageCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangCount) * 100),
            color: LANGUAGE_COLORS[name] ?? "#6366F1",
          }));

        const sortedByStars = [...repos]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        if (!cancelled) {
          setStats({
            username: GITHUB_USERNAME,
            followers: user.followers,
            publicRepos: user.public_repos,
            totalStars,
            topLanguages,
          });
          setTopRepos(sortedByStars);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return { stats, topRepos, loading, error };
}
