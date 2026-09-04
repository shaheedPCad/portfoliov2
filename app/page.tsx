import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <>
      <header className="introduction">
        <h1>Shaheed Mohamed Ali</h1>
        <p>Software engineer.</p>
      </header>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <h2 id="work-heading">Experience</h2>
        <div className="work-list">
          {profile.experience.map((work) => (
            <article className="work-row" key={`${work.company}-${work.period}`}>
              <div className="work-heading">
                <h3>
                  {work.url ? (
                    <a href={work.url} target="_blank" rel="noopener noreferrer">
                      {work.company}
                    </a>
                  ) : work.company}
                </h3>
                <span className="work-year">{work.period}</span>
              </div>
              <p className="role-title">{work.title}</p>
              <p className="work-description">{work.description}</p>
              <ul className="technologies" aria-label="Technologies">
                {work.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
