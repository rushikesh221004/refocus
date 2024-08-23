import Header from "./common/header";
import Work from "./components/work";
import Stripes from "./components/stripes"
import Products from "./components/products";
import Marquees from "./components/marquees";

export default function Page() {
    return <>
        <div className="w-full font-['satoshi_variable'] min-h-screen text-white bg-black">
            <Header/>
            <Work/>
            <Stripes/>
            <Products/>
            <Marquees/>
        </div>
    </>;
}

