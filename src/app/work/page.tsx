'use client';

export default function Work() {
  const projects = [
    {
      name: "FIREFLY",
      description: "Currently in development, backed by Tim Connors.",
      link: "#"
    },
    {
      name: "COMMSOR",
      description: "Turning your network into warm sales leads.",
      link: "#"
    },
    {
      name: "SUBSET",
      description: "A modern spreadsheet for macOS.",
      link: "#"
    },
    {
      name: "GATHER",
      description: "Catholic dating app.",
      link: "#"
    },
    {
      name: "FRONTIDA RECORDS",
      description: "EHRs for refugee camps and non-profits.",
      link: "#"
    },
    {
      name: "GENUNITY",
      description: "Activating community leaders in Boston.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full h-full scroll-smooth items-center justify-center animate-fade-in relative">
      <div className="flex flex-col gap-12 overflow-y-auto max-h-full mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h2 className="text-sm">{project.name}</h2>
            <p className="text-sm opacity-40">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}