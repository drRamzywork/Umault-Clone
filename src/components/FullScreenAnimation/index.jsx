// import { useEffect } from 'react';
// import { gsap } from 'gsap';

// const FullScreenAnimation = () => {
//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.to('.section_top', { y: '-100%', duration: 1 })
//       .to('.section_bottom', { y: '100%', duration: 1 }, '-=1');
//   }, []);

//   return (
//     <>
//       <div className="section_top" />
//       <div className="section_bottom" />


//       <style jsx>{`
//         .section_bottom,.section_top {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 50vh;
//           display: flex;
//           flex-direction: column;
//           z-index:9999;
//         }
//         .section_bottom{
//           top:unset;
//           top:50vh;

//         }
//         .section {
//           flex: 1;
//           width: 100%;
//         }
//         .section_top {
//           background: linear-gradient(to bottom, red, yellow, green);
//         }
//         .section_bottom {
//           background: linear-gradient(to top, blue, purple, pink);
//         }
//       `}</style>
//     </>
//   );
// };

// export default FullScreenAnimation;

import { useEffect } from 'react';
import { gsap } from 'gsap';

const FullScreenAnimation = () => {
  useEffect(() => {
    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();
    tl.to('.section_top', { y: '-100%', duration: 1 })
      .to('.section_bottom', { y: '100%', duration: 1 }, '-=1')
      .set('.section_bottom', { display: 'none' }) // Hide the bottom section
      .set(document.body, { overflow: 'auto' }); // Restore scrolling after animation

    // Clean up
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className="section section_top">
        <div className="blue" ></div>
        <div className="yellow"></div>
        <div className="red"></div>
        <div className="green"></div>
      </div>
      <div className="section section_bottom">
        <div className="green"></div>
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="blue" ></div>


      </div>

      <style jsx>{`
        .section {
          position: fixed;
          left: 0;
          width: 100%;
          height: 50vh;
        }
        .section_top {
          top: 0;
          // background: linear-gradient(to bottom, red, yellow, green);
        }
        .section_bottom {
          top: 50vh;
          // background: linear-gradient(to top, blue, purple, pink);
        }

        .yellow,
        .red,
       .green,
        .blue{
          height:60px;
          width:100%;
        }

        .yellow{
          background-color:#ffb701;
        }
        
        .red{
          background-color:#fd4239;
        }
        .blue{
          background-color:#3055ff;
        }
        .green{
          background-color:#24ce49;
        }
      `}</style>
    </>
  );
};

export default FullScreenAnimation;
