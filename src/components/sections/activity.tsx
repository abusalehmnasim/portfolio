import { SectionHeading } from "@/components/section-heading";
import { GitHubHeatmap } from "@/components/widgets/github-heatmap";

export function Activity() {
  return (
    <section id="activity" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading
          number="05"
          eyebrow="GitHub"
          description="Last twelve months of commits, pulled live from the GitHub API. Not a screenshot."
        />
        <GitHubHeatmap username="abusalehmnasim" />
      </div>
    </section>
  );
}
