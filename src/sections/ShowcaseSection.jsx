import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const agenticRef = useRef(null);
  const interviewRef = useRef(null);
  const financeRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each project
    const cards = [
      agenticRef.current,
      interviewRef.current,
      financeRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">

        {/* ================= SECTION HEADING ================= */}
        <div className="mb-12">
          <p className="text-white-50 text-lg">
            FEATURED WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            AI & Full-Stack Projects
          </h2>
        </div>

        <div className="showcaselayout">

          {/* =================================================
              AGENTIC APP BUILDER
          ================================================= */}
          <div
            ref={agenticRef}
            className="first-project-wrapper"
          >
            <a
              href="https://agentic-app-builder-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper">
                <img
                  src="/images/agentic-app-builder.png"
                  alt="Agentic App Builder"
                />
              </div>
            </a>

            <div className="text-content">
              <h2>Agentic App Builder</h2>

              <p className="text-white-50 md:text-xl">
                An AI-powered application builder that transforms user prompts
                into functional web applications through intelligent,
                agent-driven workflows.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "AI Agents",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full border border-black-50 bg-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5 mt-5">
                <a
                  href="https://agentic-app-builder-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/yashsoni978/Agentic-App-Builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE PROJECTS
          ================================================= */}
          <div className="project-list-wrapper overflow-hidden">

            {/* ================= AI INTERVIEW PLATFORM ================= */}
            <div
              className="project"
              ref={interviewRef}
            >
              <a
                href="https://ai-interview-platform-pied.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper">
                  <img
                    src="/images/ai-interview-platform.png"
                    alt="AI Interview Platform"
                  />
                </div>
              </a>

              <h2>AI Interview Platform</h2>

              <p className="text-white-50 mt-3">
                AI-powered interview marketplace featuring intelligent question
                generation, real-time video interviews, scheduling, and
                automated feedback.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Next.js",
                  "Gemini AI",
                  "Prisma",
                  "PostgreSQL",
                  "Stream",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full border border-black-50 bg-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5 mt-4">
                <a
                  href="https://ai-interview-platform-pied.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/yashsoni978/AI-Interview-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* ================= AI FINANCE PLATFORM ================= */}
            <div
              className="project"
              ref={financeRef}
            >
              <a
                href="https://welth-ai-finance-platform-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper">
                  <img
                    src="/images/ai-finance-platform.png"
                    alt="AI Finance Platform"
                  />
                </div>
              </a>

              <h2>AI Finance Platform</h2>

              <p className="text-white-50 mt-3">
                Intelligent personal-finance platform featuring transaction
                management, budget tracking, recurring workflows, and
                AI-generated financial insights.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Next.js",
                  "Gemini AI",
                  "Supabase",
                  "Prisma",
                  "Inngest",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full border border-black-50 bg-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5 mt-4">
                <a
                  href="https://welth-ai-finance-platform-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/yashsoni978/Welth-AI-Finance-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;