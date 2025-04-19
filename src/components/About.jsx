import aboutImg from "../assets/image.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* <h2 className="my-20 text-center text-4xl"> */}
      <h1 className="my-10 text-center text-4xl font-bold text-white">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap">
        {/* Left Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100, }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          {/* <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div> */}
          <div className="flex items-center justify-center h-full">
            <img
              src={aboutImg}
              alt="about"
              className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[32rem] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </motion.div>

        {/* Right Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex flex-col justify-center lg:justify-start">
            {Object.values(ABOUT_TEXT).map((paragraph, index) => (
              <p key={index} className="my-2 max-w-xl text-lg font-light tracking-tight py-2">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
