import workImgOne from "../assets/images/workImgOne.png"
import workImgTwo from "../assets/images/workImgTwo.png"
import workImgThree from "../assets/images/workImgThree.png"
import workImgFour from "../assets/images/workImgFour.png"
import workImgFive from "../assets/images/workImgFive.png"
import workImgSix from "../assets/images/workImgSix.png"
import { useScroll } from "framer-motion"
import { useState } from "react"



export default function Work() {

    const [images, setImages] = useState([
        { url: workImgOne, top: "50%", left: "50%", isActive: false },
        { url: workImgTwo, top: "56%", left: "44%", isActive: false },
        { url: workImgThree, top: "45%", left: "56%", isActive: false },
        { url: workImgFour, top: "60%", left: "53%", isActive: false },
        { url: workImgFive, top: "43%", left: "40%", isActive: false },
        { url: workImgSix, top: "65%", left: "55%", isActive: false }
    ])

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
        const imagesShow = (arr: number[]) => {
            return setImages(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true }
                ))
            ))
        }

        switch (Math.floor(data * 100)) {
            case 0:
                imagesShow([])
                break;
            case 1:
                imagesShow([0])
                break;
            case 2:
                imagesShow([0, 1])
                break;
            case 3:
                imagesShow([0, 1, 2])
                break;
            case 4:
                imagesShow([0, 1, 2, 3])
                break;
            case 5:
                imagesShow([0, 1, 2, 3, 4])
                break;
            case 6:
                imagesShow([0, 1, 2, 3, 4, 5])
                break;
        }
    })



    return <>
        <div className="w-full">
            <div className="relative mb-28 h-fit">
                <h1 className="text-[20vw] text-center select-none font-thin font-['satoshi_variable']">primexop</h1>
                <div className="absolute top-0 w-full h-full">
                    {images.map((item, index) => (item.isActive && <img key={index} src={item.url} alt="image" className="absolute rounded-xl w-72 -translate-x-[50%] -translate-y-[50%]" style={{ top: item.top, left: item.left }} />))}
                </div>
                <p className="tracking-widest text-center text-gray-400">Web Design, Webflow Development, Creative Development</p>
            </div>
        </div>
    </>;
}

