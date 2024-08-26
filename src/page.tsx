import Header from "./common/header";
import Work from "./components/work";
import Stripes from "./components/stripes"
import Products from "./components/products";
import Marquees from "./components/marquees";
import Footer from "./common/footer"

export default function Page() {
    return <>
        <div className="w-full min-h-screen text-white bg-black">
            <Header/>
            <Work/>
            <Stripes/>
            <Products/>
            <Marquees/>
            <Footer/>
        </div>
    </>;
}

