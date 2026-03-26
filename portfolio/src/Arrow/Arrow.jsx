import { useEffect, useState } from "react";
import "./Arrow.css";

function ScrollArrow() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`scroll-text ${!showArrow ? "hidden" : ""}`}>
      <p>Scroll omlaag</p>
      <span className="arrow">↓</span>
    </div>
  );
}

export default ScrollArrow;