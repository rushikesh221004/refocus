import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type CardPropsType = {
    width: string,
    start: boolean,
    para: boolean
}
export default function Card({ width, start, para }: CardPropsType) {
    return <>
        <div className={`p-5 transition duration-400 ease-in-out ${start ? "bg-[#323238] hover:bg-[#7443FF]" : "bg-[#29292E] hover:bg-[#323238]"} rounded-xl ${width} min-h-[28rem] flex justify-between flex-col`}>
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                    <h3 className="font-light text-md">{start ? "Get in Touch" : "Up Next: News"}</h3>
                    <HiOutlineArrowNarrowRight />
                </div>
                <h1 className="mt-5 text-3xl font-medium">{start ? "Let's get to it, together." : "Insights and behind the scenes"}</h1>
            </div>
            <div className="w-full">
                {start && <>
                    <h1 className="font-medium text-8xl">Start a Project</h1>
                    <button className="px-5 py-2 font-bold border-[1px] mt-7 border-white rounded-full">Contact us</button>
                </>}

                {para && <p className="text-sm text-zinc-300">Explore what drives our team.</p>}
            </div>
        </div >
    </>
}