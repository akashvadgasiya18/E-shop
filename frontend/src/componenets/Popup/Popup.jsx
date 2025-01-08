import { IoCloseSharp } from "react-icons/io5";
import Button from "../shared/Button";

const Popup = ({ orderPopup, handlePopup }) => {
    return (
        <>
            {
                orderPopup && (
                    <>
                        <div>
                            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                                <div className="w-[350px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white duration-200 rounded-xl">
                                    <div className="flex justify-between items-center font-bold text-xl dark:text-black">
                                        <h1>Order Now</h1>
                                        <div>
                                            <IoCloseSharp onClick={handlePopup} className="text-2xl cursor-pointer" />
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <input type="text" placeholder="name" className="form-input" />
                                        <input type="email" placeholder="Email" className="form-input" />
                                        <input type="text" placeholder="Address" className="form-input" />
                                        <div className="flex justify-center mt-3">
                                            <Button text="Order Now" bgColor="bg-red-500" textColor="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </>
    )
}

export default Popup
