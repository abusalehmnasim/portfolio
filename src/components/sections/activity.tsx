import { SectionHeading } from "@/components/section-heading";
import { GitHubHeatmap } from "@/components/widgets/github-heatmap";

export function Activity() {
  return (
    <section id="activity" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="05"
          cmd="activity"
          title="Last twelve months."
          description="Pulled live from the GitHub API. Rendered as ASCII because we can."
        />
        <GitHubHeatmap username="abusalehmnasim" />
      </div>
    </section>
  );
}
