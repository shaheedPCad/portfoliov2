export const metadata = {
  title: "Work — Shaheed Mohamed Ali",
};

type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
};

const roles: Role[] = [
  {
    company: "Company Name",
    title: "Job Title",
    start: "2023",
    end: "Present",
    description: "Short description of responsibilities and impact.",
  },
  {
    company: "Previous Company",
    title: "Job Title",
    start: "2021",
    end: "2023",
    description: "Short description of responsibilities and impact.",
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-xl font-medium tracking-tight">Work</h1>
      <ol className="space-y-8 border-l border-foreground/10 pl-6">
        {roles.map((role) => (
          <li key={`${role.company}-${role.start}`} className="space-y-1">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium">
                {role.title} · {role.company}
              </h2>
              <span className="font-mono text-xs text-foreground/50">
                {role.start} — {role.end}
              </span>
            </div>
            <p className="text-foreground/70">{role.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
