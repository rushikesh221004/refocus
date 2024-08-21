import Refokus from "../assets/svg/refokusLogo.svg"
import Button from "../components/button"

export default function Header() {
    return <>
        <div className="flex items-center justify-between max-w-screen-xl py-5 mx-auto border-b-[1px] border-zinc-700">
            <div className="flex items-center nleft">
                <img src={Refokus} alt="refokus" />
                <div className="flex ml-20 gap-14 links">
                    {["Home", "Work", "About", "News", "Careers"].map((item, index) => <a key={index} href={`/${item}`} className="flex items-center gap-1 font-sans text-sm">{index == 1 && <span className="inline-block p-[3px] bg-green-600 rounded-full" style={{ boxShadow: "0 0 0.75em #00FF19" }}></span>}{item}</a>)}
                </div>
            </div>
            <Button text="Start a Project"/>
        </div>
    </>
}