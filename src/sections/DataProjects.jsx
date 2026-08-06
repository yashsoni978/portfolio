import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const dataProjects = [
  {
    title: "Credit Card Customer Churn Analysis",
    description:
      "Analyzed 10,127 credit-card customers using Python, Pandas, PostgreSQL, and Power BI to uncover churn patterns across demographics, transaction activity, credit utilization, and customer segments.",
    image: "/images/credit-card-churn.png",
    tech: ["Python", "PostgreSQL", "Power BI", "Pandas"],
    live: "https://credit-card-customer-churn-analysis-fwesrjcqdiqo45teofbrgu.streamlit.app/",
    github: "https://github.com/yashsoni978/Credit-Card-Customer-Churn-Analysis",
  },
  {
    title: "Blinkit Sales & Outlet Analytics",
    description:
      "Analyzed 8,523 retail records to evaluate $1.20M+ in sales, product performance, outlet characteristics, customer ratings, and retail trends using an end-to-end analytics workflow.",
    image: "/images/blinkit-analytics.png",
    tech: ["Python", "PostgreSQL", "Power BI", "Pandas"],
    live: "https://blinkit-sales-outlet-analytics-svzhlp8uwontsqfz38rpjy.streamlit.app/",
    github: "https://github.com/yashsoni978/Blinkit-Sales-Outlet-Analytics",
  },
  {
    title: "Customer Shopping Behavior Analysis",
    description:
      "Analyzed 3,900 customer records to identify purchasing patterns, revenue trends, customer segments, discount behavior, and product performance through SQL, Python, and interactive dashboards.",
    image: "/images/customer-shopping.png",
    tech: ["Python", "PostgreSQL", "Power BI", "Pandas"],
    live: "https://customer-shopping-behavior-analysis-fjgpfc7amoauxahu52pm8i.streamlit.app/",
    github:
      "https://github.com/yashsoni978/Customer-Shopping-Behavior-Analysis",
  },
];

const DataProjects = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".data-project-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full px-5 md:px-20 py-20 md:py-28"
    >
      {/* Heading */}
      <div className="mb-12 md:mb-16">
        <p className="text-white-50 text-lg uppercase tracking-wider">
          Data-Driven Insights
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Data & Analytics Projects
        </h2>

        <p className="text-white-50 text-lg mt-4 max-w-3xl">
          Turning raw data into actionable business insights through Python,
          SQL, Power BI, and interactive analytics applications.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {dataProjects.map((project) => (
          <article
            key={project.title}
            className="data-project-card border border-black-50 bg-black-100 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Screenshot */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.title} dashboard`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-white-50 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 text-sm rounded-full border border-black-50 bg-black"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  Live Dashboard ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DataProjects;