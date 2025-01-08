import i1 from "../../assets/watch1.png"

const Banner2 = () => {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12">
            <div className="container">
                <div className=" bg-green-600/90 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                    <div className="p-6 sm:p-8">
                        <p className="text-lg">30% off</p>
                        <h1 className="uppercase text-4xl lg:text-8xl font-bold">Happy Hours</h1>
                        <p className="text-lg">10 jan to 28 jan</p>
                    </div>

                    <div className="h-full item-center flex">
                        <img src={i1} alt="" className="scale-125 w-[200px] md:w-[300px] mx-auto drop-shadow-2xl object-cover" />
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p className="font-bold text-xl">Air solo bass</p>
                        <p className="font-bold text-5xl sm:text-7xl">Winter sale</p>
                        <p className="text-sm tracking-wide leading-5">JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours Playtime, Pure Bass, Quick Charging,Bluetooth 5.0</p>
                        <div>
                            <button className="font-bold bg-white text-green-900 rounded-full py-3 px-6 hover:bg-green-100 hover:text-green-900 hover:scale-105 mt-3">Shop Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner2
