import { IoIosReturnRight } from "react-icons/io";
// type ButtonPropsType = {}


export default function Button() {
    return <>
         <div className="flex items-center justify-center gap-4 px-5 py-2 font-sans text-black bg-white rounded-3xl">
            <span className="font-sans text-md">Start a Project</span> <IoIosReturnRight className="text-[15px]"/>
         </div>
    </>;
}

