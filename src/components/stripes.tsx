import Stripe from "./stripe"
import noCode from "../assets/svg/noCode.svg"
import awwwards from "../assets/svg/awwwards.svg"
import designAwards from "../assets/svg/designAwards.svg"

export default function Stripes() {

    const data = [
        { img: noCode, number: 2 },
        { img: awwwards, number: 15 },
        { img: designAwards, number: 52 },
        { img: noCode, number: 2 },
        { img: awwwards, number: 15 },
        { img: designAwards, number: 52 },
    ]
    return <>
    
        <div className="py-20 mt-32 w-full relative flex overflow-hidden">
                {data.map((item, index) => (
                    <Stripe key={index} values={item} />
                ))}
                 {data.map((item, index) => (
                    <Stripe key={index} values={item} />
                ))}
        </div>
       
    </>
}