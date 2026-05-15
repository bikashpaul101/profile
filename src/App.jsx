export default function PortfolioApp() {
  const skills = {
    Backend: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "REST APIs", "Microservices", "Flask"],
    Frontend: ["React", "Angular", "AngularJS", "JavaScript", "HTML5", "CSS3"],
    Tools: ["Git", "Maven", "Webpack", "Postman", "VS Code"],
    Database: ["MySQL", "Stored Procedures"],
  };

  const projects = [
    {
      title: "Healthcare Patient Portal Platform",
      description:
        "Developed scalable healthcare and patient-facing enterprise applications with secure role-based systems, modular architecture, and REST-driven integrations.",
      tech: ["Java", "Spring Boot", "React", "Hibernate", "MySQL"],
    },
    {
      title: "Healthcare Analytics Dashboard",
      description:
        "Built analytics-focused applications using React and Python Flask to support enterprise reporting, operational workflows, and data-driven healthcare insights.",
      tech: ["React", "Python Flask", "REST APIs", "MySQL"],
    },
    {
      title: "Role-Based Healthcare Access System",
      description:
        "Implemented authentication, authorization, and secure role-based access systems for enterprise healthcare and pharmacy platforms.",
      tech: ["Spring Security", "Angular", "REST APIs", "MySQL"],
    },
  ];

  const experiences = [
    {
      company: "HealthAsyst",
      role: "Technical Lead",
      duration: "Jul 2018 — Present",
      highlights: [
        "Designed and developed RESTful APIs using Spring Boot, Hibernate, and Java.",
        "Built reusable frontend modules using Angular, AngularJS, and React.",
        "Developed analytics-focused web applications using React and Python Flask.",
      ],
    },
    {
      company: "mscripts Systems India Pvt. Ltd.",
      role: "Associate Software Engineer",
      duration: "Nov 2017 — May 2018",
      highlights: [
        "Enhanced AngularJS-based enterprise web applications and reusable UI modules.",
        "Implemented backend integrations, business workflows, and SQL stored procedures.",
        "Worked on responsive web interfaces, API integrations, and production support.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">Bikash Paul</h1>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#experience" className="hover:text-blue-400">Experience</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-28">
        <p className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
          Senior Java Full Stack Engineer
        </p>

        <h2 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Building scalable cloud-native systems with Java & React.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Senior Software Engineer with 9 years of experience building scalable enterprise healthcare and pharmacy-domain platforms using Java, Spring Boot, React, Angular, REST APIs, Hibernate, and MySQL.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
            View Projects
          </a>

          <a
            href="/Bikash_Paul_Resume.pdf"
            download
            className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              About
            </p>

            <h3 className="text-4xl font-bold">
              Engineering high-performance enterprise applications.
            </h3>
          </div>

          <div className="space-y-6 text-slate-400">
            <p>
              Experienced Senior Java Full Stack Engineer focused on enterprise backend systems, scalable APIs, healthcare platforms, frontend architecture, and AI-assisted software development workflows.
            </p>

            <p>
              Strong background in healthcare and pharmacy-domain applications, authentication systems, analytics platforms, microservice-based systems, and enterprise-grade frontend/backend integrations.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Skills
          </p>
          <h3 className="text-4xl font-bold">Technology Stack</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              <h4 className="mb-4 text-xl font-semibold">{category}</h4>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

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
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/30"
            >
              <div className="mb-6 h-48 rounded-2xl bg-slate-800" />

              <h4 className="text-2xl font-semibold">{project.title}</h4>

              <p className="mt-4 text-slate-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Experience
          </p>
          <h3 className="text-4xl font-bold">Career Timeline</h3>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h4 className="text-2xl font-semibold">{exp.role}</h4>
                  <p className="text-blue-400">{exp.company}</p>
                </div>

                <p className="text-slate-400">{exp.duration}</p>
              </div>

              <ul className="mt-6 space-y-3 text-slate-400">
                {exp.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contact
        </p>

        <h3 className="text-5xl font-bold">Let’s build something impactful.</h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Open to Senior Java Full Stack Engineering opportunities focused on scalable backend systems, healthcare platforms, AI-enabled applications, and enterprise product development.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:bikashpaul758@gmail.com" className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500">
            Email Me
          </a>

          <a href="https://www.linkedin.com/in/bikash-paul-6290a4113" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:border-slate-500">
            LinkedIn
          </a>

          <a href="https://github.com/bikashpaul101" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:border-slate-500">
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Bikash Paul — Senior Java Full Stack Engineer
      </footer>
    </div>
  );
}
