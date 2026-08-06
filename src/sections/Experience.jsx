import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // =========================================================
    // LEFT CARDS - DROP DOWN WHEN THEY ENTER VIEW
    // =========================================================
    gsap.utils.toArray(".journey-left-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    // =========================================================
    // TIMELINE ICONS - DROP DOWN WHEN THEY ENTER VIEW
    // =========================================================
    gsap.utils.toArray(".journey-icon").forEach((icon) => {
      gsap.fromTo(
        icon,
        {
          y: -80,
          opacity: 0,
          scale: 0.7,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    // =========================================================
    // RIGHT SIDE TEXT
    // =========================================================
    gsap.utils.toArray(".journey-content").forEach((content) => {
      gsap.fromTo(
        content,
        {
          x: 60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    // =========================================================
    // TIMELINE LINES - GROW WITH SCROLL
    // =========================================================
    gsap.utils.toArray(".journey-line").forEach((line) => {
      gsap.fromTo(
        line,
        {
          scaleY: 0,
          transformOrigin: "top top",
        },
        {
          scaleY: 1,
          transformOrigin: "top top",
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    });

    // Refresh positions after everything is rendered
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // =========================================================
  // GET ICON BASED ON CARD CATEGORY/TITLE
  // =========================================================
  const getTimelineIcon = (card) => {
    const category = card.category?.toLowerCase() || "";
    const title = card.title?.toLowerCase() || "";

    // Education
    if (
      category.includes("education") ||
      title.includes("b.tech") ||
      title.includes("btech") ||
      title.includes("computer science")
    ) {
      return "🎓";
    }

    // Full Stack / Development
    if (
      category.includes("full-stack") ||
      category.includes("development") ||
      category.includes("developer") ||
      title.includes("full-stack") ||
      title.includes("development") ||
      title.includes("developer")
    ) {
      return "💻";
    }

    // Data / Analytics
    if (
      category.includes("data") ||
      category.includes("analytics") ||
      category.includes("machine learning") ||
      category.includes("analyst") ||
      title.includes("data") ||
      title.includes("analytics") ||
      title.includes("machine learning")
    ) {
      return "📊";
    }

    return "🚀";
  };

  return (
    <section
      id="journey"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <TitleHeader
          title="Education & Development Journey"
          sub="🚀 My Journey So Far"
        />

        {/* =====================================================
            JOURNEY TIMELINE
        ===================================================== */}
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-16">
            {expCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="exp-card-wrapper"
              >
                {/* =================================================
                    LEFT CARD
                ================================================= */}
                <div className="xl:w-2/6 journey-left-card">
                  <GlowCard card={card} index={index}>
                    <div className="flex flex-col gap-5">
                      {/* Optional Image */}
                      {card.imgPath && (
                        <div className="flex items-center">
                          <img
                            src={card.imgPath}
                            alt={card.cardTitle || card.title}
                            className="max-w-full h-auto object-contain"
                          />
                        </div>
                      )}

                      {/* Left Card Title */}
                      {card.cardTitle && (
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                          {card.cardTitle}
                        </h3>
                      )}

                      {/* Left Card Description */}
                      {card.cardDescription && (
                        <p className="text-white-50 text-lg leading-relaxed">
                          {card.cardDescription}
                        </p>
                      )}
                    </div>
                  </GlowCard>
                </div>

                {/* =================================================
                    RIGHT TIMELINE
                ================================================= */}
                <div className="xl:w-4/6">
                  <div className="flex items-start relative">
                    {/* =============================================
                        ICON + TIMELINE LINE
                    ============================================= */}
                    <div className="journey-timeline-column">
                      {/* Timeline Icon */}
                      <div
                        className="journey-icon"
                        aria-hidden="true"
                      >
                        <span>{getTimelineIcon(card)}</span>
                      </div>

                      {/* Timeline Line
                          Don't show after last card
                      */}
                      {index !== expCards.length - 1 && (
                        <div className="journey-line" />
                      )}
                    </div>

                    {/* =============================================
                        RIGHT TEXT CONTENT
                    ============================================= */}
                    <div className="journey-content">
                      {/* Title */}
                      <h1 className="font-semibold text-3xl md:text-4xl">
                        {card.title}
                      </h1>

                      {/* Date */}
                      {card.date && (
                        <p className="my-5 text-white-50 text-lg">
                          🗓️&nbsp;{card.date}
                        </p>
                      )}

                      {/* Category */}
                      {card.category && (
                        <p className="text-[#839CB5] italic text-lg">
                          {card.category}
                        </p>
                      )}

                      {/* Highlights */}
                      {card.highlights &&
                        card.highlights.length > 0 && (
                          <ul className="list-disc ms-6 mt-6 flex flex-col gap-5 text-white-50">
                            {card.highlights.map(
                              (highlight, highlightIndex) => (
                                <li
                                  key={highlightIndex}
                                  className="text-lg md:text-xl leading-relaxed"
                                >
                                  {highlight}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;