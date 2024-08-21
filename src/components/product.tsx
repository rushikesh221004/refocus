import Button from "./button";

type ProductPropsType = {
    values: {
        title: string,
        description: string,
        live: boolean,
        caseStudy: boolean,
    }
}

export default function Product({ values }: ProductPropsType) {
    const { title, description, live, caseStudy } = values
    return <>
        <div className="w-full py-20">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <h1 className="text-4xl font-thin capitalize">{title}</h1>
                <div className="w-1/3">
                    <p className="mb-10 font-thin leading-8">{description}</p>
                    <div className="flex items-center gap-6">
                        {live == true && <Button text="Live Website" />}{caseStudy === true && <Button text="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    </>
}