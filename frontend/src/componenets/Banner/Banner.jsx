import img1 from "../../assets/headphone.png"

const Banner = () => {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12">
            <div className="container">
                <div className=" bg-red-500 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                    <div className="p-6 sm:p-8">
                        <p data-aos="slide-right" className="text-sm">30% off</p>
                        <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-6xl font-bold">Fine Smile</h1>
                        <p data-aos="fade-up" className="text-sm">10 jan to 28 jan</p>
                    </div>

                    <div data-aos="zoom-in" className="h-full item-center flex">
                        <img src={img1} alt="" className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover" />
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p data-aos="zoom-out" className="font-bold text-xl">Air solo bass</p>
                        <p data-aos="fade-up" className="font-bold text-5xl sm:text-7xl">Winter sale</p>
                        <p data-aos="fade-up" className="text-sm tracking-wide leading-5">JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours Playtime, Pure Bass, Quick Charging,Bluetooth 5.0</p>
                        <div>
                            <button className="font-bold bg-white text-red-500 rounded-full py-3 px-6 hover:bg-red-200 hover:text-black hover:scale-105 mt-3">Shop Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
