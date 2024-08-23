import Marquee from "./marquee";
import basf from "../assets/svg/basf.svg"
import bcgp from "../assets/svg/bcgp.svg"
import flowcode from "../assets/svg/intenseeye.svg"
import lavender from "../assets/svg/lavender.svg"
import manv from "../assets/svg/manv.svg"
import remind from "../assets/svg/remind.svg"
import singularity from "../assets/svg/singularity.svg"
import ypo from "../assets/svg/ypo.svg"
import spotify from "../assets/svg/spotify.svg"
import haufe from "../assets/svg/haufe.svg"
import yahoo from "../assets/svg/yahoo.svg"
import rainfall from "../assets/svg/rainfall.svg"
import doxel from "../assets/svg/doxel.svg"
import mural from "../assets/svg/mural.svg"
import webflow from "../assets/svg/webflow.svg"
import rocket from "../assets/svg/rocket.svg"
import accel from "../assets/svg/accel.svg"
import weglot from "../assets/svg/weglot.svg"

export default function Marquees() {
    const images = [
        [basf, bcgp, flowcode, lavender, manv, remind, singularity, ypo],
        [spotify, haufe, yahoo, rainfall, doxel, mural, webflow, rocket, accel, weglot]
    ]
    return <>
        <div className="py-32">
            {images.map((item, index) => <Marquee key={index} imagesUrl={item}/>)}
        </div>
    </>
}