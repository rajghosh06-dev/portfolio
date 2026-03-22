import { motion } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionWrapper({ children, className }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
