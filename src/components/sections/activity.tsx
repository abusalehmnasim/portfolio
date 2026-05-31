import { SectionHeading } from "@/components/section-heading";
import { GitHubHeatmap } from "@/components/widgets/github-heatmap";

export function Activity() {
  return (
    <section id="activity" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="05"
          eyebrow="GitHub"
          title="Last twelve months."
          description="Pulled live from the GitHub API. Not a screenshot."
        />
        <GitHubHeatmap username="abusalehmnasim" />
      </div>
    </section>
  );
}
