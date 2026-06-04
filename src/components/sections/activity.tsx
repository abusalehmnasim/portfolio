import { SectionHeading } from "@/components/section-heading";
import { GitHubHeatmap } from "@/components/widgets/github-heatmap";

export function Activity() {
  return (
    <section id="activity" className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub activity."
          description="A real-time look at the last twelve months of public contributions on GitHub — pulled from the API, not a screenshot."
        />
        <GitHubHeatmap username="abusalehmnasim" />
      </div>
    </section>
  );
}
