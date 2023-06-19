const Pop = (props) => {

    const { item, setShowPop } = props

    const closePop = () => {
        setShowPop(false)
    }

    return (
        <div className="pop">
            <div className="inner">
                <img src={item} alt="" />
            </div>
            <div onClick={closePop} className="close">
                X
            </div>
        </div>
    )
}

export default Pop