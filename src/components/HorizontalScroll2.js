// components/HorizontalScroll.js
import { useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/HorizontalScroll2.module.css";

const HorizontalScroll2 = () => {
  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(`.${styles.panel}`);

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.container}`,
          pin: true,
          scrub: 0.1,
          end: "+=3000",
        },
      });

      gsap.set(`.${styles.box1}, .${styles.box2}`, { y: 100 });
      ScrollTrigger.defaults({
        markers: { startColor: "white", endColor: "white" },
      });

      gsap.to(`.${styles.box1}`, {
        y: -130,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
          trigger: `.${styles.box1}`,
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
          id: "1",
        },
      });

      gsap.to(`.${styles.box2}`, {
        y: -120,
        backgroundColor: "#1e90ff",
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.box2}`,
          containerAnimation: scrollTween,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
          id: "2",
        },
      });

      ScrollTrigger.create({
        trigger: `.${styles.box3}`,
        containerAnimation: scrollTween,
        toggleClass: styles.active,
        start: "center 60%",
        id: "3",
      });

      ScrollTrigger.create({
        trigger: `.${styles.green}`,
        containerAnimation: scrollTween,
        start: "center 65%",
        end: "center 51%",
        onEnter: () => console.log("enter"),
        onLeave: () => console.log("leave"),
        onEnterBack: () => console.log("enterBack"),
        onLeaveBack: () => console.log("leaveBack"),
        onToggle: (self) => console.log("active", self.isActive),
        id: "4",
      });

      gsap.set(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
        { autoAlpha: 0 }
      );
      ["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
        ScrollTrigger.create({
          trigger: `.${triggerClass}`,
          containerAnimation: scrollTween,
          start: "left 30%",
          end: i === 3 ? "right right" : "right 30%",
          markers: false,
          onToggle: (self) =>
            gsap.to(`.marker-${i + 1}`, {
              duration: 0.25,
              autoAlpha: self.isActive ? 1 : 0,
            }),
        });
      });

      // making the code pretty/formatted.
      if (typeof window !== "undefined") {
        // PR.prettyPrint();
      }
    };

    loadGSAP();
  }, []);

  return (
    <div>
      <div className={styles.description}>
        <div>
          <h1>
            Horizontal <code>containerAnimation</code>
          </h1>
          <p>
            Scroll this page vertically and you'll see a horizontal
            fake-scrolling section where a container is animated on the x-axis
            using a ScrollTrigger animation. With{" "}
            <code>containerAnimation</code> you can trigger animations when
            certain elements <i>inside</i> that container enter the viewport
            horizontally! It's like a ScrollTrigger inside of a ScrollTrigger.
            🤯
          </p>
        </div>
        <div className={styles.scrollDown}>
          Scroll down
          <div className={styles.arrow}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.panel} ${styles.blue}`}>
          Scroll down to animate horizontally &gt;
        </div>

        <section className={`${styles.panel} ${styles.red}`}>
          <div>
            <pre className={`code-block prettyprint lang-js linenums`}>
              {`gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset",
    id: "1",
  }
});`}
            </pre>
            Fire an animation at a particular spot...
          </div>
          <div className={`${styles.box1} ${styles.box}`}>box-1</div>
        </section>

        <section className={`${styles.panel} ${styles.gray}`}>
          <div>
            <pre className={`code-block prettyprint lang-js linenums`}>
              {`gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "2"
  }
});`}
            </pre>
            ...or scrub it back & forth with the scrollbar
          </div>
          <div className={`${styles.box2} ${styles.box}`}>box-2</div>
        </section>

        <section className={`${styles.panel} ${styles.purple}`}>
          <div>
            <pre className={`code-block prettyprint lang-js linenums`}>
              {`ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%",
  id: "3"
});`}
            </pre>
            Toggle a CSS class
          </div>
          <div className={`${styles.box3} ${styles.box}`}>box-3</div>
        </section>

        <section className={`${styles.panel} ${styles.green}`}>
          <div>
            <pre className={`code-block prettyprint lang-js linenums`}>
              {`ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: self => console.log("active", self.isActive),
  id: "4"
});`}
            </pre>
            Use the rich callback system
          </div>
        </section>
      </div>

      <div className={styles.final}>
        <div>
          <h1>Wasn't that fun?</h1>
          <p>Here are a few caveats to keep in mind:</p>
          <ul>
            <li>
              The fake-scrolling animation (just the part that's moving the
              container horizontally) must have no easing (
              <code>ease: "none"</code>).
            </li>
            <li>
              Pinning and snapping won't work on ScrollTriggers with a{" "}
              <code>containerAnimation</code>.
            </li>
            <li>
              The mapping of scroll position trigger points are based on the
              trigger element itself not being animated horizontally (inside the
              container). If you need to animate the trigger, you can either
              wrap it in a &lt;div&gt; and use that as the trigger instead or
              just factor the trigger's movement into your end position. For
              example, if you animate it left 100px, make the <code>end</code>{" "}
              100px further to the left.
            </li>
            <li>Requires ScrollTrigger 3.8.0 or later</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll2;
