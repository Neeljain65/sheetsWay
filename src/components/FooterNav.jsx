import * as React from "react";

function FooterNavigation() {
  const navigationSections = [
    {
      title: "About Us",
      links: ["Home", "About Us", "Destination", "Contact us"]
    },
    {
      title: "Services",
      links: ["Support", "Explore", "Get in Touch", "Testimonials"]
    }
  ];

  return (
    <>
      {navigationSections.map((section) => (
        <nav key={section.title} className="flex flex-col leading-none" role="navigation" aria-label={section.title}>
          <h3 className="text-lg font-semibold">{section.title}</h3>
          <ul className="flex flex-col mt-6 text-base">
            {section.links.map((link) => (
              <li key={link} className="mt-5 first:mt-0">
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </>
  );
}

export default FooterNavigation;