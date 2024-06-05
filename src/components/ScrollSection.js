// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// function ScrollSection() {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true,
//         },
//       }
//     );
//     return () => {
//       {
//         /* A return function for killing the animation on component unmount */
//       }
//       pin.kill();
//     };
//   }, []);

//   return (
//     <section className="scroll-section-outer">
//       <div ref={triggerRef}>
//         <div ref={sectionRef} className="scroll-section-inner">
//           <div
//             className="scroll-section"
//             style={{ backgroundColor: "lightblue" }}
//           >
//             Content for section 1
//           </div>
//           <div
//             className="scroll-section"
//             style={{ backgroundColor: "lightgreen" }}
//           >
//             Content for section 2
//           </div>
//           <div
//             className="scroll-section"
//             style={{ backgroundColor: "lightcoral" }}
//           >
//             Content for section 3
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ScrollSection;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div
            className="scroll-section"
            style={{ backgroundColor: "lightblue" }}
          >
            Content for section 1
          </div>
          <div
            className="scroll-section"
            style={{ backgroundColor: "lightgreen" }}
          >
            Content for section 2
          </div>
          <div
            className="scroll-section"
            style={{ backgroundColor: "lightcoral" }}
          >
            Content for section 3
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
