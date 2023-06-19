import { useState } from "react"
import Pop from "./Pop"

const PhotoListItem = (props) => {

    const { item } = props

    const [showPop, setShowPop] = useState(false)

    const popUp = () => {
        setShowPop(true)
    }

    return (
        <>
            {showPop && <Pop item={item.url} setShowPop={setShowPop} />}
            <div onClick={popUp} className="photo-list-item">
                <img src={item.thumbnailUrl} alt="" />
                <div className="inner">
                    <p>
                        {item.title}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PhotoListItem