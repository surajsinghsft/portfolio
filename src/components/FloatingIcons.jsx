import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJs } from "react-icons/fa";

const icons = [
  { icon: <FaReact size={40} />, x: -200, y: -100 },
  { icon: <FaNodeJs size={40} />, x: 200, y: -120 },
  { icon: <FaGitAlt size={40} />, x: -250, y: 150 },
  { icon: <FaDocker size={40} />, x: 220, y: 180 },
  { icon: <FaJs size={40} />, x: 0, y: 220 },
];

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {icons.map((item, index) => (
        <motion.div
          key={index}
         className="absolute text-primary opacity-70 dark:opacity-40"
          initial={{ x: item.x, y: item.y }}
          animate={{
            y: [item.y, item.y - 30, item.y],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

    </div>
  );
};