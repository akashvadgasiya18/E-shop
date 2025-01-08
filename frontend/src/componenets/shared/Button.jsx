const Button = ({ text, bgColor, textColor, handler = () => { } }) => {
    return (
        <div>
            <button className={`${bgColor} ${textColor} rounded-full cursor-pointer hover:scale-105 duration-300 py-2.5 px-8 relative z-10 font-semibold`} onClick={handler}>
                {text}
            </button>
        </div>

    )
}

export default Button
