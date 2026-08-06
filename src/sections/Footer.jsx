const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yashsoni978",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yashwardhan-soni-a67b9a250",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/OB56iRtTst/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <p className="font-medium">
            Yashwardhan Soni
          </p>
        </div>

        {/* CENTER SOCIAL LINKS */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white-50
                hover:text-white
                transition-colors
                duration-300
              "
            >
              {social.name} ↗
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-white-50">
            © {new Date().getFullYear()} Yashwardhan Soni. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;