import Card from "./card";

export default function Cards() {
    return <>
        <div className="w-full">
            <div className="flex items-center max-w-screen-xl gap-2 pt-20 mx-auto">
                <Card width={"basis-1/3"} start={false} para={true} />
                <Card width={"basis-2/3"} start={true} para={false} />
            </div>
        </div>
    </>
}