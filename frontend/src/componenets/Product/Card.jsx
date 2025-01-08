import Button from "../shared/Button"


const Card = ({ data }) => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                {
                    data.map((data) => (
                        <>
                            <div className="group" key={data.id}>
                                <div className="relative space-y-3">
                                    <img src={data.img} alt="" className="h-[250px] w-[250px] object-cover rounded-md" />
                                    <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur justify-center items-center duration-500">
                                        <Button text={"Add to cart"} bgColor={"bg-red-500"} textColor={"text-white"} />
                                    </div>
                                </div>
                                <div className="leading-7 mt-4 text-center">
                                    <h2 className="font-bold text-xl text-gray-700">{data.title}</h2>
                                    <h2 className="font-bold text-[18px]">$ {data.price}</h2>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Card
