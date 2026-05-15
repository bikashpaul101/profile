<section id="projects" className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-12">
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
      Projects
    </p>

    <h3 className="text-4xl font-bold">Featured Work</h3>
  </div>

  <div className="grid gap-8 lg:grid-cols-3">
    {projects.map((project) => (
      <div
        key={project.title}
        className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
      >
        {/* Technical Overview */}
        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Architecture
              </p>

              <p className="mt-2 font-semibold text-blue-400">
                Microservices
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Domain
              </p>

              <p className="mt-2 font-semibold text-blue-400">
                Healthcare
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Backend
              </p>

              <p className="mt-2 font-semibold text-blue-400">
                Spring Boot
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Frontend
              </p>

              <p className="mt-2 font-semibold text-blue-400">
                React + Angular
              </p>
            </div>
          </div>
        </div>

        {/* Project Title */}
        <h4 className="text-2xl font-semibold leading-snug">
          {project.title}
        </h4>

        {/* Description */}
        <p className="mt-4 leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Engineering Highlights */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <p className="text-sm text-slate-300">
              REST API integrations
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <p className="text-sm text-slate-300">
              Role-based authentication
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-400" />
            <p className="text-sm text-slate-300">
              Enterprise workflow support
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
