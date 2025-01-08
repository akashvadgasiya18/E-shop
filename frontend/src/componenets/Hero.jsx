import Slider from "react-slick";
import i1 from "../assets/head2.png";
import i2 from "../assets/virtual.png";
import i3 from "../assets/laptop.png";
import Button from "./shared/Button";

const HeroSlide = [
    {
        id: 1,
        img: i1,
        subtitle: "Boats solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        img: i2,
        subtitle: "Boats solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        img: i3,
        subtitle: "Boats solo",
        title: "Wired",
        title2: "Laptop",
    },
];
const Hero = ({ handlePopup }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className="container">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[670px] hero-bg-color flex justify-center items-center mt-3">
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {HeroSlide.map((data) => (
                            <>
                                <div key={data.id}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        {/* -------------- heading part -------------------- */}
                                        <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h1 data-aos="zoom-in" data-aos-duration="700" data-aos-delay="true" className="text-2xl sm:text-6xl lg:text-2xl font-bold ">{data.subtitle}</h1>
                                            <h1 data-aos="zoom-in" data-aos-duration="700" data-aos-delay="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                            <h1 data-aos="zoom-in" data-aos-duration="700" data-aos-delay="true" className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
                                            <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="true" className="mt-4">
                                                <Button text="Shop Now" bgColor={"bg-black"} textColor={"text-white"} handler={handlePopup} />
                                            </div>
                                        </div>
                                        {/* ----------- image part ------------------ */}
                                        <div className="order-1 sm:order-2">
                                            <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                                                <img src={data.img} alt="" className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px]  sm:scale-150 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;
