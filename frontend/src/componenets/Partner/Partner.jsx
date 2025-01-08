import i1 from "../../assets/Partner/boat.png"
import i2 from "../../assets/Partner/fast.png"
import i3 from "../../assets/Partner/lenovo.png"
import i4 from "../../assets/Partner/titan.png"
import i5 from "../../assets/Partner/zeb.png"

const Partner = () => {
    return (
        <div className="py-2 mt-24 md:block bg-gray-800 dark:bg-gray-100">
            <div className="container ">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-3 place-items-center opacity-50">
                    <img src={i1} alt="" className="w-[200px] dark:invert" />
                    <img src={i2} alt="" className="w-[200px] dark:invert" />
                    <img src={i3} alt="" className="w-[200px] dark:invert" />
                    <img src={i4} alt="" className="w-[200px] dark:invert" />
                    <img src={i5} alt="" className="w-[200px] dark:invert" />
                </div>
            </div>
        </div>
    )
}

export default Partner
