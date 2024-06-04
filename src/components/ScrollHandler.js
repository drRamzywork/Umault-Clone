import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    let horizontalScroll = false;

    const handleScroll = (event) => {
      const targetSection = document.querySelector("#target-section");
      const rect = targetSection.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        horizontalScroll = true;
      } else {
        horizontalScroll = false;
      }

      if (horizontalScroll) {
        const delta = Math.sign(event.deltaY);
        targetSection.scrollLeft += delta * 100;
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      if (!horizontalScroll) return;

      switch (event.key) {
        case "ArrowUp":
          document.body.style.overflowY = "scroll";
          break;
        case "ArrowDown":
          document.body.style.overflowY = "scroll";
          break;
        case "ArrowRight":
          document.body.style.overflowY = "hidden";
          document.querySelector("#target-section").scrollLeft += 100;
          event.preventDefault();
          break;
        case "ArrowLeft":
          document.body.style.overflowY = "hidden";
          document.querySelector("#target-section").scrollLeft -= 100;
          event.preventDefault();
          break;
        default:
          break;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default ScrollHandler;
