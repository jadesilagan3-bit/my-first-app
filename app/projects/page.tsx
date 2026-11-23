
export const metadata = {
  title: "Projects | Your Name",
};

const projects = [
  {
    id: 1,
    name: "ParkEase",
    description: "A parking management system.",
  },
  {
    id: 2,
    name: "Zoo Management",
    description: "A system for managing zoo information.",
  },
  {
    id: 3,
    name: "SpendWise",
    description: "An application for tracking expenses.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4"
          >
            <h2 className="text-xl font-bold">
              {project.name}
            </h2>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
