import Image from "next/image";
import Header, { ArrowUpRight } from "@/components/Header";
import {
  site,
  heroCards,
  highlights,
  stack,
  stats,
  approach,
  projects,
  experience,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* ---------- Hero ---------- */}
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-media">
            <Image
              src={site.photo.src}
              alt={site.photo.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>

          <div className="hero-content">
            <p className="chip">Identity. Access. Infrastructure.</p>
            <h1 id="hero-title" className="hero-title">
              <span className="sr-only">{site.name} — </span>
              Secure Platforms Built from Identity Up
            </h1>
            <p className="hero-lede">
              I&apos;m {site.shortName}, a full stack engineer in {site.location.city} building
              multi-tenant authentication, access governance and the infrastructure underneath.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View My Work <ArrowUpRight />
              </a>
              <a href="#about" className="btn btn-ghost">
                About Me <PlayIcon />
              </a>
            </div>
          </div>

          <ul className="hero-glass" aria-label="At a glance">
            {heroCards.map((c) => (
              <li key={c.title}>
                <span className="corner" aria-hidden />
                <h2>{c.title}</h2>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="section container" aria-labelledby="about-title">
          <div className="about">
            <div>
              <p className="chip">About</p>
              <h2 id="about-title" className="h2">
                Identity &amp; authorization as <span className="accent">core platform</span>{" "}
                capabilities
              </h2>
            </div>
            <div className="about-body">
              <p className="lead">
                I build platforms with a focus on identity and access management for enterprise
                analytics software — secure, multi-tenant systems for both SaaS and air-gapped
                deployments.
              </p>
              <p>
                At Dlytica I design Single Sign-On architectures that separate authentication from
                authorization, implement hierarchical role-based access control, and enforce system-
                and data-level access governance. I also designed and built a licensing platform that
                runs cloud-connected or fully air-gapped.
              </p>
              <p>
                Beyond identity, I optimize databases, build event-driven services and work on
                Kubernetes deployments, Infrastructure as Code, GitOps and CI/CD — and I mentor junior
                engineers through code reviews and design discussions.
              </p>
            </div>
          </div>

          <ul className="highlights">
            {highlights.map((h, i) => (
              <li key={h.title} className="card">
                <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Stats + stack ---------- */}
        <section className="section container" aria-labelledby="stats-title">
          <h2 id="stats-title" className="sr-only">
            At a glance
          </h2>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
          <div className="stack">
            <p className="stack-label">Tools I build with</p>
            <ul>
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section id="work" className="section container" aria-labelledby="work-title">
          <div className="section-head">
            <div>
              <p className="chip">Selected Work</p>
              <h2 id="work-title" className="h2">
                Platforms I&apos;ve built &amp; systems I <span className="accent">rebuilt</span>
              </h2>
            </div>
            <p className="muted">
              Platform work at Dlytica, plus Rust rebuilds of tools I use every day to understand
              what happens under the hood.
            </p>
          </div>
          <ul className="work-grid">
            {projects.map((p, i) => (
              <li key={p.title} className="work-card">
                <div className="work-top">
                  <span className="work-tag">{p.tag}</span>
                  <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Approach ---------- */}
        <section className="section container" aria-labelledby="approach-title">
          <div className="approach">
            <div>
              <p className="chip">Approach</p>
              <h2 id="approach-title" className="h2">
                Security designed in, <span className="accent">not bolted on</span>
              </h2>
              <ol className="steps">
                {approach.map((p, i) => (
                  <li key={p.title}>
                    <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="quote-card">
              <span className="chip">On AI agents &amp; least privilege</span>
              <blockquote>
                &ldquo;What can it access, what can it change, and how quickly can we stop it?&rdquo;
              </blockquote>
              <figcaption>
                AI safety is also an infrastructure and system design problem.
                <strong>— {site.name}</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="section container" aria-labelledby="exp-title">
          <p className="chip">Experience</p>
          <h2 id="exp-title" className="h2">
            Where I&apos;ve <span className="accent">worked &amp; studied</span>
          </h2>
          <ol className="exp-list">
            {experience.map((e) => (
              <li key={e.role}>
                <div className="exp-meta">
                  <span className="exp-period">{e.period}</span>
                  <span className="muted">{e.place}</span>
                </div>
                <div>
                  <h3>{e.role}</h3>
                  <p className="exp-company">{e.company}</p>
                  {e.points.length > 0 && (
                    <ul className="exp-points">
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Testimonials ---------- */}
        <section id="testimonials" className="section container" aria-labelledby="t-title">
          <p className="chip">Recommendations</p>
          <h2 id="t-title" className="h2">
            What colleagues <span className="accent">say</span>
          </h2>
          <div className="t-grid">
            {testimonials.map((t) => (
              <figure key={t.name} className="card t-card">
                <span className="quote-mark" aria-hidden>
                  &ldquo;
                </span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section container" aria-labelledby="contact-title">
          <div className="contact">
            <p className="chip">Contact</p>
            <h2 id="contact-title" className="contact-title">
              Have a platform to build? Let&apos;s talk.
            </h2>
            <p className="muted">
              Open to conversations about identity, access governance, platform engineering and
              full stack work.
            </p>
            <div className="hero-actions">
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                {site.email} <ArrowUpRight />
              </a>
              <a href={site.socials.linkedin} className="btn btn-ghost" target="_blank" rel="noopener noreferrer me">
                LinkedIn <ArrowUpRight />
              </a>
              <a href={site.socials.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer me">
                GitHub <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>
          {site.location.city}, {site.location.country}
        </span>
      </footer>
    </>
  );
}

function PlayIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <path d="M7 4.5v15l12-7.5-12-7.5Z" />
    </svg>
  );
}
