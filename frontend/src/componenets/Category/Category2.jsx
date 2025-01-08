import i1 from "../../assets/Category/gaming.png"
import i2 from "../../assets/Category/vr.png"
import i3 from "../../assets/Category/speaker.png"
import Button from "../shared/Button"

const Category2 = () => {
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[340px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[5px] text-white font-semibold">Enjoy</p>
                                <p className="mb-[2px] text-gray-100 text-2xl font-semibold">With</p>
                                <p className="text-black/50 text-4xl xl:text-5xl font-bold opacity-30 mb-4">Gaming Tools</p>
                                <Button text={"Browse"} bgColor={"bg-red-500"} textColor={"text-white"} />
                            </div>
                        </div>

                        <img src={i1} alt="" className="w-[280px] h-[250px] absolute -right-0" />
                    </div>

                    {/*  --------------------- 2nd ---------------------------- */}

                    <div className="py-10 pl-5 bg-gradient-to-br from-green-400 to-green-500 text-white rounded-3xl relative h-[340px] flex items-start">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white font-semibold">Enjoy</p>
                                <p className="mb-[2px]  text-2xl font-semibold">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Virtual</p>
                                <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-green-800"} />
                            </div>
                        </div>

                        <img src={i2} alt="" className="w-[250px] absolute bottom-0 -right-0" />
                    </div>

                    {/* ----------------------- 3rd ----------------------------- */}

                    <div className="py-10 pl-5 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-3xl relative h-[340px] flex items-start">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[5px] text-gray-100 font-semibold">Enjoy</p>
                                <p className="mb-[2px] text-gray-100 text-2xl font-semibold">With</p>
                                <p className="text-black/90 text-4xl xl:text-5xl font-bold opacity-40 mb-7">Speakers</p>
                                <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-red-600"} />
                            </div>
                        </div>

                        <img src={i3} alt="" className="w-[200px] absolute bottom-0 right-0" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category2
