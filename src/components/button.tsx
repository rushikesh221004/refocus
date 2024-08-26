import { IoIosReturnRight } from "react-icons/io";
type ButtonPropsType = {
    text: string,
}


export default function Button({text}: ButtonPropsType) {
    return <>
         <div className="flex items-center justify-center gap-4 px-5 py-2 font-sans text-black bg-white w-fit rounded-3xl">
            <span className="font-sans text-md">{text}</span> <IoIosReturnRight className="text-[15px]"/>
         </div>
    </>;
}

