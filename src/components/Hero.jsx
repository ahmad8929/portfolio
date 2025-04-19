import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/image1.png";
import { motion } from "framer-motion";

const Hero = () => {

  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-12 lg:text-8xl">
              Mohd Ahmad
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>

            {/* Image - Visible only on mobile (hidden on desktop) */}
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-lg mb-4 lg:hidden pt-4"> {/* Hidden on desktop */}
              <img
                src={profilePic}
                alt="Ahmad"
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>

            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-1 font-light tracking-tighter">
              {HERO_CONTENT.first}
            </motion.p>

            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-1 font-light tracking-tighter">
              {HERO_CONTENT.second}
            </motion.p>
          </div>
        </div>

        {/* Right Side - Only visible on large screens */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end h-full">
            {/* Image visible only on large screens */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Ahmad"
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-lg hidden lg:block" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
