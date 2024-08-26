import Cards from "../components/cards";
import enterprisePartner from "../assets/svg/enterprisePartner.svg"

export default function Footer() {
    return <>
        <div>
            <Cards />
            <div className="flex justify-between max-w-screen-xl py-5 mx-auto">
                <div className="flex items-center gap-7">
                    {["Privacy Policy", "Cookie Policy", "Impressum", "Terms", "Webflow Agency"].map((item, index) => (
                        <p key={index} className="text-sm cursor-pointer hover:text-zinc-600 text-zinc-500">{item}</p>
                    ))}
                </div>
                <img src={enterprisePartner} alt="image" />
            </div>
        </div>

    </>
}