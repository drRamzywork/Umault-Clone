// // components/Header.js
// import { motion } from 'framer-motion';
// import styles from './index.module.scss';

// const Header = () => {
//   return (
//     <motion.header
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="fixed top-0 left-0 right-0 bg-transparent text-white p-4 z-50"
//     >
//       <div className="container mx-auto flex justify-between items-center bg-red">
//         <h1 className={`text-2xl font-bold ${styles.logo}`}>
//           <a href="/">
//             let's do this
//           </a>
//         </h1>
//         <nav>
//           <ul className="flex space-x-4">

//             <li><a href="/">Home</a></li>
//             <li><a href="/">Home</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/about">About</a></li>
//           </ul>
//         </nav>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;




// components/Header.js
import { motion } from 'framer-motion';
import styles from './index.module.scss';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 bg-transparent text-white p-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center bg-red">


        <nav>
          <ul className={`flex space-x-4 ${styles.nav_links}`}>

            <li>
              <a href="/" className={styles.logo}>
                <img src="https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/662618fb643f14223846f928_Logo.svg" alt="" />
              </a>
            </li>
            <li><a href="/"><p>Portfolio</p>
              <div className={styles.img_container}>
                <img src="https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65dddd9f94fe66a19eea5c7b_burger.webp" alt="" />
              </div>

            </a></li>
            <li><a href="/services">About</a></li>
            <li><a href="/about">Insights</a></li>
          </ul>
        </nav>



        <h1 className={`text-2xl font-bold ${styles.logo}`}>
          <a href="/">
            let's do this
          </a>
        </h1>
      </div>
    </motion.header>
  );
};

export default Header;
