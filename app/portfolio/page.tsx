import projects from "../data/projects";

export default function Portfolio() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="p-5 max-w-screen-lg mx-auto">
        <div className="pb-8">
          <h1 className="leading-loose text-4xl font-bold inline border-b-4 border-blue-300">
            Projects
          </h1>
          <div className="mt-10 p-5 grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.id.toString()}
                className="w-full mb-3 rounded-md bg-gradient-to-r from-slate-300 via-blue-300 to-gray-400 p-1"
              >
                <div className="h-full p-5 bg-gray-800">
                  <div>
                    <h1 className="leading-loose text-2xl">{project.name}</h1>
                    <p className="text-gray-200 pt-4">{project.description}</p>
                    <div className="mt-4">
                      {project.tags.map((tag) => (
                        <button
                          key={tag}
                          className="mt-3 cursor-auto w-fit mr-3 px-3 py-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        GitHub
                      </a>
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 text-cyan-400 hover:underline"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
