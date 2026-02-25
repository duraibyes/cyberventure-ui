import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "event", label: "Events" },
  { id: "membership", label: "Membership" },
  { id: "contact", label: "Contact Us" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600">
          Cyber<span className="text-red-600">Venture</span>
        </h1>

        {/* Menu */}
        <nav className="space-x-8 hidden md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`font-medium transition ${
                active === section.id
                  ? "text-orange-600 border-b-2 border-red-600 pb-1"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;