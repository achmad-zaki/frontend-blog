import { motion } from "framer-motion";

const FadeTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeTransition;
