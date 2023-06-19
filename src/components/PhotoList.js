import PhotoListItem from "./PhotoListItem"

const PhotoList = (props) => {

    const { photos } = props

    const photosMap = photos.map((item) => {
        return (
            <div key={item.id}>
                <PhotoListItem item={item} />
            </div>
        )
    })

    return (
        <div className="photo-list">
            {photosMap}
        </div>
    )
}

export default PhotoList