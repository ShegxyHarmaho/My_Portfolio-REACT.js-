import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
// Technologies data
const techData = [
  { name: "React", icon: <RiReactjsLine />, color: "text-cyan-400" },
  { name: "Next.js", icon: <TbBrandNextjs />, color: "text-white" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center gap-4"
      >
        {techData.map((tech, index) => (
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            key={index}
            className="group flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className={`text-7xl ${tech.color} group-hover:opacity-80`}>
              {tech.icon}
            </div>
            <p className="mt-2 text-sm text-neutral-400 group-hover:text-neutral-200">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
