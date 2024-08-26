import Button from "./button";

type ProductPropsType = {
    values: {
        title: string,
        description: string,
        live: boolean,
        caseStudy: boolean,
    }
    mover: number
    count: number
}

export default function Product({ values, mover, count }: ProductPropsType) {
    const { title, description, live, caseStudy } = values
    return <>
        <div className="w-full py-20">
            <div onMouseEnter={() => { mover(count) }} className="flex items-center justify-between max-w-screen-xl mx-auto">
                <h1 className="text-5xl font-bold capitalize">{title}</h1>
                <div className="w-1/3">
                    <p className="mb-10 text-lg font-thin leading-8">{description}</p>
                    <div className="flex items-center gap-6">
                        {live == true && <Button text="Live Website" />}{caseStudy === true && <Button text="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    </>
}