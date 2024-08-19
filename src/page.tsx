import Header from "./common/header";
import Work from "./components/work";

export default function Page() {
    return <>
        <div className="w-full font-['satoshi_variable'] h-screen text-white bg-black">
            <Header/>
            <Work/>
        </div>
    </>;
}

