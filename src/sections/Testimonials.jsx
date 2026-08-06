import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section
      id="achievements"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">

        <TitleHeader
          title="Achievements & Milestones"
          sub="🏆 Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((achievement, index) => (
            <GlowCard
              card={achievement}
              key={index}
              index={index}
            >
              <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="flex items-center justify-center size-12 rounded-xl bg-white/5 text-2xl">
                  {achievement.icon}
                </div>

                {/* Achievement */}
                <div>
                  <p className="font-bold text-lg">
                    {achievement.name}
                  </p>

                  <p className="text-white-50">
                    {achievement.mentions}
                  </p>
                </div>

              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;