import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the element that matches the current URL hash (e.g., #about)
// Works nicely with <Link to="#about" /> in a single-page layout.
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) {
        // Smooth scroll to the section
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    // No hash or element not found: scroll to top to avoid being stuck
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hash]);

  return null;
};

export default ScrollToHash;
