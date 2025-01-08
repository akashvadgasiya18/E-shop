import { FaCarSide } from "react-icons/fa6";
import { FaCheckCircle, FaWallet } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl text-red-400" />,
        title: "Free Shiping",
        desc: "Free shiping on all orders"
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-red-500" />,
        title: "Safe Money",
        desc: "30 days Money back"
    },
    {
        id: 3,
        icon: <MdHeadsetMic className="text-4xl md:text-5xl text-red-500" />,
        title: "Online Support",
        desc: "Technical support 24/7"
    },
    {
        id: 4,
        icon: <FaWallet className="text-4xl md:text-5xl text-red-500" />,
        title: "Payments Secured",
        desc: "All payments are secured"
    },
]

const service = () => {
    return (
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                    ServiceData.map((data) => (
                        <>
                            <div className="flex flex-col items-center sm:flex-row gap-4">
                                {data.icon}
                                <div>
                                    <h1 className="sm:text-xl font-bold text-gray-600">{data.title}</h1>
                                    <p className="text-gray-400 text-sm">{data.desc}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default service
