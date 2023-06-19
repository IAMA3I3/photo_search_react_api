const Error = (props) => {

    const { errMssg, getPhotos, setIsLoading, setIsError } = props

    const reload = () => {
        getPhotos()
        setIsLoading(true)
        setIsError(false)
        console.log('reloading')
    }

    return (
        <div className="error">
            <div className="inner">
                <h3>Something went wrong!</h3>
                <p>{errMssg}</p>
                <button onClick={reload}>
                    Try Again
                </button>
            </div>
        </div>
    )
}

export default Error