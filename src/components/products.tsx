import Product from "./product";

export default function Products() {
    const products = [
        {
            title: "arqitel",
            description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            caseStudy: false
        },
        {
            title: "cula",
            description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            caseStudy: false
        },
        {
            title: "layout land",
            description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live: true,
            caseStudy: false
        },
        {
            title: "TTR",
            description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            caseStudy: false
        },
        {
            title: "maniv",
            description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live: true,
            caseStudy: false
        },
        {
            title: "singularity",
            description: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
            live: true,
            caseStudy: false
        },
        {
            title: "like magic",
            description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
            live: true,
            caseStudy: true
        },
        {
            title: "silvr",
            description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            live: true,
            caseStudy: false
        },
        {
            title: "rainfall",
            description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            caseStudy: true
        },
        {
            title: "intenseye",
            description: "A brand new website for Intenseye just before their $64M Series. ",
            live: true,
            caseStudy: false
        },
        {
            title: "remind",
            description: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
            live: true,
            caseStudy: true
        },
        {
            title: "summon",
            description: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
            live: true,
            caseStudy: true
        },
        {
            title: "jungle",
            description: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
            live: true,
            caseStudy: true
        },
        {
            title: "Candid Health",
            description: "A complete redesign of a health-startup website, followed by cutting edge development.",
            live: true,
            caseStudy: false
        },
        {
            title: "Yahoo!",
            description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            caseStudy: true
        },
        {
            title: "YIR 2022",
            description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcaseStudy to celebrate.",
            live: true,
            caseStudy: false
        },
        {
            title: "YIR 2021",
            description: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
            live: true,
            caseStudy: false
        },
        {
            title: "Showcase",
            description: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
            live: true,
            caseStudy: false
        },
        {
            title: "Weglot",
            description: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
            live: true,
            caseStudy: false
        },
        {
            title: "RocketChat",
            description: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
            live: true,
            caseStudy: false
        },
    ]
    return <>
        <div className="mt-32">
            {products.map((item, index) => (
                <Product key={index} values={item} />
            ))}
        </div>
    </>
}