type MarqueePropsType = {
    imagesUrl: string[];
};
export default function Marquee({imagesUrl}: MarqueePropsType) {
    return <>
        <div className="flex items-center w-full gap-20 py-8 overflow-hidden whitespace-nowrap">
            {imagesUrl.map((elem, index) => <img src={elem} alt="image" key={index} className="flex-shrink-0"/> )}
            {imagesUrl.map((elem, index) => <img src={elem} alt="image" key={index}  className="flex-shrink-0"/> )}
        </div>
    </>
}


