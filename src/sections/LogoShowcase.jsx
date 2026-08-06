import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center gap-4 marquee-item">
      <img
        src={icon.imgPath}
        alt={`${icon.name} logo`}
        className="w-12 h-12 object-contain"
      />

      <span className="text-white-50 text-xl md:text-2xl font-semibold whitespace-nowrap">
        {icon.name}
      </span>
    </div>
  );
};

const LogoShowcase = () => {
  return (
    <section id="about" className="md:my-20 my-10 relative">

      {/* Section Heading */}
      <div className="md:px-20 px-5 mb-4">
        <p className="text-white-50 text-lg uppercase tracking-wider">
          Technologies I Work With
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Building Across Web, AI & Data
        </h2>
      </div>

      {/* Moving Technology Marquee */}
      <div className="relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-8">

            {/* First set */}
            {logoIconsList.map((icon, index) => (
              <LogoIcon
                key={`first-${index}`}
                icon={icon}
              />
            ))}

            {/* Duplicate set for infinite animation */}
            {logoIconsList.map((icon, index) => (
              <LogoIcon
                key={`second-${index}`}
                icon={icon}
              />
            ))}

          </div>
        </div>
      </div>

    </section>
  );
};

export default LogoShowcase;