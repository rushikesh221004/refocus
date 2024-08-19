import workImgOne from "../assets/images/workImgOne.png"
import workImgTwo from "../assets/images/workImgTwo.png"
import workImgThree from "../assets/images/workImgThree.png"
import workImgFour from "../assets/images/workImgFour.png"
import workImgFive from "../assets/images/workImgFive.png"
import workImgSix from "../assets/images/workImgSix.png"

export default function Work() {
    const images = [
        {url: workImgOne, top: "50%", left: "50%", isActive: true},
        {url: workImgTwo, top: "56%", left: "44%", isActive: true},
        {url: workImgThree, top: "45%", left: "56%", isActive: true},
        {url: workImgFour, top: "60%", left: "53%", isActive: true},
        {url: workImgFive, top: "43%", left: "40%", isActive: true},
        {url: workImgSix, top: "65%", left: "55%", isActive: true}
    ]
    return <>
         <div className="w-full">
            <div className="relative max-w-screen-xl mx-auto bg-yellow-200 h-fit">
                <h1 className="text-[30vw] select-none font-thin">work</h1>
                <div className="absolute top-0 w-full h-full">
                    {images.map((item, index) => (item.isActive && <img key={index} src={item.url} alt="image" className="absolute rounded-xl w-64 -translate-x-[50%] -translate-y-[50%]" style={{top: item.top, left: item.left}}/>))}
                </div>
            </div>
         </div>
    </>;
}

