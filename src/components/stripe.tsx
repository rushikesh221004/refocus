type StripePropsType = {
    values: {
            img: string,
            number: number,
        }
}

export default function Stripe({values}: StripePropsType) {
    const {img, number} = values
    return <>
        <div className="px-10 flex items-center justify-between py-5 border-t-[1px] border-b-[1px] border-r-[0.5px] border-zinc-600 w-[16.66%]">
            <img src={img} alt="" />
            <span className="text-lg font-light">{number}</span>
        </div>
    </>
}





