import Heading from "../shared/Heading"
import Card from "./Card";
import i1 from "../../assets/Product/p-1.png"
import i2 from "../../assets/Product/p-2.jpg"
import i3 from "../../assets/Product/p-3.jpg"
import i4 from "../../assets/Product/p-4.jpg"
import i5 from "../../assets/Product/p-5.jpg"
import i6 from "../../assets/Product/p-7.jpg"
import i7 from "../../assets/Product/p-9.jpg"
import i8 from "../../assets/Product/p-3.jpg"

const ProductData = [
    {
        id: 1,
        img: i1,
        title: "Boat Headphone",
        price: "120",
        aosdelay: "0",
    },
    {
        id: 2,
        img: i2,
        title: "Smart Whatch",
        price: "150",
        aosdelay: "100",
    },
    {
        id: 3,
        img: i3,
        title: "Googles",
        price: "120",
        aosdelay: "200",
    },
    {
        id: 4,
        img: i4,
        title: "Speacker",
        price: "300",
        aosdelay: "100",
    },
]

const ProductData2 = [
    {
        id: 1,
        img: i5,
        title: "Boat Headphone",
        price: "190",
        aosdelay: "0",
    },
    {
        id: 2,
        img: i6,
        title: "Smart Whatch",
        price: "150",
        aosdelay: "430",
    },
    {
        id: 3,
        img: i7,
        title: "Googles",
        price: "120",
        aosdelay: "230",
    },
    {
        id: 4,
        img: i8,
        title: "Speacker",
        price: "300",
        aosdelay: "150",
    },
]

const Product = () => {
    return (
        <div>
            <div className="container">
                {/* ----- header part ---------- */}
                <Heading title="Our Products" subtitle="Explore our Products" />
                {/* ----- Body part ---------- */}

                <Card data={ProductData} />
                <Card data={ProductData2} />
            </div>
        </div>
    )
}

export default Product
