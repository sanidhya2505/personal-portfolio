import { projects } from '../data/content'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label mb-4">Projects</p>
      <h2 className="heading-lg mb-3 text-3xl sm:text-4xl">Four builds, end to end.</h2>
      <p className="body-text mb-12 max-w-prose">
        Each one shipped solo, from schema to deployment. Click a project to open the case file.
      </p>

      <div className="space-y-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
