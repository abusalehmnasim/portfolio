import { SectionHeading } from "@/components/section-heading";
import { GitHubHeatmap } from "@/components/widgets/github-heatmap";

export function Activity() {
  return (
    <section id="activity" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="GitHub"
          title="Last 12 months of commits."
          description="Pulled live from the GitHub API. Not a screenshot."
        />
        <GitHubHeatmap username="abusalehmnasim" />
      </div>
    </section>
  );
}
