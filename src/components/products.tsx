import { useState } from "react"
import Product from "./product"
import { motion } from "framer-motion"
import secondImage from "../assets/images/secondImage.png"
import thirdImage from "../assets/images/thirdImage.webp"
import firstVideo from "../assets/videos/firstVideo.mp4"
import fourthVideo from "../assets/videos/fourthVideo.mp4"
import firstImage from "../assets/images/firstImage.webp"

export default function Products() {
    const products = [
        {
            title: "arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            caseStudy: false,
        },
        {
            title: "cula",
            description:
                "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            caseStudy: false,
        },
        {
            title: "layout land",
            description:
                "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live: true,
            caseStudy: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            caseStudy: false,
        },
        {
            title: "maniv",
            description:
                "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live: true,
            caseStudy: false,
        },
        {
            title: "singularity",
            description:
                "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
            live: true,
            caseStudy: false,
        },
        {
            title: "like magic",
            description:
                "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
            live: true,
            caseStudy: true,
        },
        {
            title: "silvr",
            description:
                "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            live: true,
            caseStudy: false,
        },
        {
            title: "rainfall",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            caseStudy: true,
        }
    ]
    const [pos, setPos] = useState(0)
    const mover = (val: number) => {
        setPos(val * 21)
    }
    return (
        <>
            <div className="relative mt-32">
                {products.map((item, index) => (
                    <Product key={index} values={item} mover={mover} count={index} />
                ))}
                <div className="absolute top-0 w-full h-full pointer-events-none">
                    <motion.div
                        initial={{ y: pos, x: "-50%" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
                        animate={{ y: pos + `rem` }}
                        className="w-[32rem] bg-white rounded-[3%] overflow-hidden absolute left-[45%] h-[21rem]"
                    >
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full"
                        >  <video src={firstVideo} autoPlay muted loop className="object-cover w-full h-full" ></video> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full bg-sky-300"
                        ><img src={secondImage} alt="firstImage" className="object-cover w-full h-full" /> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full bg-sky-400"
                        ><img src={thirdImage} alt="firstImage" className="object-cover w-full h-full" /> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full bg-sky-400"
                        > <video src={fourthVideo} autoPlay muted loop className="object-cover w-full h-full" ></video> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full bg-sky-500"
                        ><img src={firstImage} alt="firstImage" className="object-cover w-full h-full" ></img> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full"
                        >  <video src={firstVideo} autoPlay muted loop className="object-cover w-full h-full" ></video> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full bg-sky-300"
                        ><img src={secondImage} alt="firstImage" className="object-cover w-full h-full" /> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full bg-sky-400"
                        ><img src={thirdImage} alt="firstImage" className="object-cover w-full h-full" /> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full bg-sky-400"
                        > <video src={fourthVideo} autoPlay muted loop className="object-cover w-full h-full" ></video> </motion.div>
                        <motion.div
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                            animate={{ y: -pos + `rem` }}
                            className="w-full h-full"
                        >  <video src={firstVideo} autoPlay muted loop className="object-cover w-full h-full" ></video> </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
