import { SectionHeading } from "@/components/section-heading";
import { GitHubHeatmap } from "@/components/widgets/github-heatmap";

export function Activity() {
  return (
    <section id="activity" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Open Source"
          title="Live coding activity."
          description="A real-time look at the last 12 months of public contributions on GitHub — pulled live, not a screenshot."
        />
        <GitHubHeatmap username="abusalehmnasim" />
      </div>
    </section>
  );
}
