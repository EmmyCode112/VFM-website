import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 922);

  const handleClick = (link) => {
    setActiveLink(link);
    window.history.pushState(null, null, `#${link}`);
    if (window.innerWidth <= 922) {
      setNavbarActive(false); // Close the menu on mobile after clicking a link
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 922);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveLink(sectionId);
            window.history.pushState(null, null, `#${sectionId}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Wishlist", href: "#wishlist" },
    { name: "Blog/News", href: "#blog" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <div className={`header ${!isMobile && isScrolled ? "scrolled" : ""}`}>
      <nav>
        <div className="float-div"></div>
        <div className="logo">
          <a href="#">
            <img src="/vfm LOGO.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className={`nav-links ${navbarActive ? "open" : ""}`}>
          <ul className="links">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeLink === link.href.substring(1) ? "active" : ""}
                  onClick={() => handleClick(link.href.substring(1))}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="cover">
          <div className="btn">
            <button className="relative">
              <div className="coming-soon">Coming Soon</div>
              DOWNLOAD APP
            </button>
          </div>
          <button className="menu-toggle" onClick={() => setNavbarActive((prev) => !prev)}>
            <img className="w-[35px]" src="./navbar_toggler.png" alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
