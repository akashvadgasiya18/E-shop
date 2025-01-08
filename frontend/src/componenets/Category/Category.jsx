import Button from "../shared/Button"
import i1 from "../../assets/Category/c-1.png"
import i2 from "../../assets/Category/watch.png"
import i3 from "../../assets/Category/macbook.png"

const Category = () => {
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[340px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[5px] text-gray-300 font-semibold">Enjoy</p>
                                <p className="mb-[2px] text-gray-100 text-2xl font-semibold">With</p>
                                <p className="text-white text-4xl xl:text-5xl font-bold opacity-20 mb-4">Earphone</p>
                                <Button text={"Browse"} bgColor={"bg-red-500"} textColor={"text-white"} />
                            </div>
                        </div>

                        <img src={i1} alt="" className="w-[320px] absolute bottom-0" />
                    </div>

                    {/*  --------------------- 2nd ---------------------------- */}

                    <div className="py-10 pl-5 bg-gradient-to-br from-yellow-400 to-yellow-200 text-white rounded-3xl relative h-[340px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-gray-100 font-semibold">Enjoy</p>
                                <p className="mb-[2px] text-gray-100 text-2xl font-semibold">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-4">Gadgets</p>
                                <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-black"} />
                            </div>
                        </div>

                        <img src={i2} alt="" className="w-[300px] absolute -right-[35px] top-2" />
                    </div>

                    {/* ----------------------- 3rd ----------------------------- */}

                    <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-red-400 to-red-500 text-white rounded-3xl relative h-[340px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[5px] text-gray-100 font-semibold">Enjoy</p>
                                <p className="mb-[2px] text-gray-100 text-2xl font-semibold">With</p>
                                <p className="text-black/90 text-6xl xl:text-7xl font-bold opacity-20 mb-7">Laptops</p>
                                <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-red-600"} />
                            </div>
                        </div>

                        <img src={i3} alt="" className="w-[280px] absolute top-1/2 -translate-y-1/2 -right-0" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category
