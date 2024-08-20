import Stripe from "./stripe"
import noCode from "../assets/svg/noCode.svg"
import awwwards from "../assets/svg/awwwards.svg"
import designAwards from "../assets/svg/designAwards.svg"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Stripes() {
    // const settings = {
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 6000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    // };
    const data = [
        { img: noCode, number: 2 },
        { img: awwwards, number: 15 },
        { img: designAwards, number: 52 },
        { img: noCode, number: 2 },
        { img: awwwards, number: 15 },
        { img: designAwards, number: 52 },
    ]
    return <>
    
        <div className="flex items-center">
        {/* <Slider {...settings}> */}
                {data.map((item, index) => (
                    <Stripe key={index} values={item} />
                ))}
             {/* </Slider> */}
        </div>
       
    </>
}