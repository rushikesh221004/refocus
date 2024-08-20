import Header from "./common/header";
import Work from "./components/work";
import Stripes from "./components/stripes"

export default function Page() {
    return <>
        <div className="w-full font-['satoshi_variable'] min-h-screen text-white bg-black">
            <Header/>
            <Work/>
            <Stripes/>
        </div>
    </>;
}

