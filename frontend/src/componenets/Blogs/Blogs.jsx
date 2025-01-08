import Heading from "../shared/Heading"
import i1 from "../../assets/Blog/b1.png"
import i2 from "../../assets/Blog/b2.png"
import i3 from "../../assets/Blog/b3.png"

const BlogData = [
    {
        title: "How to choose perfect smartwatch ?",
        subtitle: "It is the diameter of the speaker driver unit inside your earplug. The bigger the driver size, the wider range of frequencies it would be able to reproduce evenly. So bigger driver size is better.",
        published: "jan 20, 2023 by XYZ",
        img: i1
    },
    {
        title: "How to choose perfect headphone ?",
        subtitle: "It is the diameter of the speaker driver unit inside your earplug. The bigger the driver size, the wider range of frequencies it would be able to reproduce evenly. So bigger driver size is better.",
        published: "March 27, 2023 by PQR",
        img: i2
    },
    {
        title: "How to choose perfect laptop ?",
        subtitle: "It is the diameter of the speaker driver unit inside your earplug. The bigger the driver size, the wider range of frequencies it would be able to reproduce evenly. So bigger driver size is better.",
        published: "Dec 10, 2023 by ABC",
        img: i3
    },
]

const Blogs = () => {
    return (
        <div className="my-12">
            <div className="container mt-9">
                <Heading title="Recent News" subtitle="Explore our Blogs" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-9 md:gap-7 sm:gap-4 md:grid-cols-3">
                    {
                        BlogData.map((data) => (
                            <>
                                <div key={data.title} className="bg-white dark:bg-gray-900">
                                    <div className="overflow-hidden rounded-2xl mb-2">
                                        <img src={data.img} alt="" className="w-full h-[300px]  object-cover hover:scale-105 duration-300 rounded-2xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-700 text-[17px] mt-4 font-semibold">{data.published}</p>
                                        <p className="font-bold text-[20px] line-clamp-1">{data.title}</p>
                                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{data.subtitle}</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Blogs
