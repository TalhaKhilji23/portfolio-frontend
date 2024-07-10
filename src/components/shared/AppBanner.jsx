import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import developerLight2 from "../../images/developer2.svg";
import developerDark2 from "../../images/developer-dark2.svg";
import { motion } from "framer-motion";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      style={{ position: "relative" }}
    >
      <motion.div
        id="1"
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right  top-0 left-0 mt-2 sm:mt-0 z-50"
        style={{ position: "absolute" }}
      >
        <img
          src={activeTheme === "dark" ? developerLight2 : developerDark2}
          alt="Developer"
        />
      </motion.div>
      <div className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
        <div id="2" className="w-full md:w-1/3 text-left ">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-general-bold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left relative text-ternary-dark dark:text-primary-light uppercase"
          >
            Hi, I'm Talha Khilji
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeOutIn",
              duration: 0.9,
              delay: 0.2,
            }}
            className="font-general-medium mt-4 text-lg md:text-xl lg:text-xl xl:text-xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
          >
            A Full-Stack Developer
          </motion.p>
          <div className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.3,
              }}
              className="flex justify-center sm:block"
            >
              <a
                download="TalhaKhiljiCV.pdf"
                href="/files/TalhaKhiljiCV.pdf"
                className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                aria-label="Download Resume"
              >
                <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                <span className="text-sm sm:text-lg font-general-medium duration-100">
                  Download CV
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-full  text-right float-right mt-8 sm:mt-0"
        >
          <img
            
            src={activeTheme === "dark" ? developerLight : developerDark}
            alt="Developer"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AppBanner;
