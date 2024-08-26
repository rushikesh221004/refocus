import { motion } from "framer-motion";

type MarqueePropsType = {
    imagesUrl: string[];
    direction: string
};

export default function Marquee({ imagesUrl, direction }: MarqueePropsType) {
    return (
        <div className="relative overflow-hidden w-full">
            <div className="flex">
                <motion.div
                    initial={{ x: direction === "left" ? "0" : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : "0" }}
                    transition={{
                        ease: "linear",
                        duration: 35,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="flex flex-shrink-0 gap-40 py-10 pr-40"
                >
                    {imagesUrl.map((elem, index) => (
                        <img src={elem} alt="image" key={index} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: direction === "left" ? "0" : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : "0" }}
                    transition={{
                        ease: "linear",
                        duration: 35,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="flex flex-shrink-0 gap-40 py-10 pr-40"
                >
                    {imagesUrl.map((elem, index) => (
                        <img src={elem} alt="image" key={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
