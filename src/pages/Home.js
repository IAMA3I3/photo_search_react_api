import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import PhotoList from "../components/PhotoList"
import Loading from "../components/Loading"
import Error from "../components/Error"

const Home = () => {

  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errMssg, setErrMssg] = useState('')

  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/photos'
    axios.get(apiURL)
      .then((response) => {
        console.log(response, 'response')
        setPhotos(response.data)
        setIsError(false)
      })
      .catch((error) => {
        console.log(error, 'error')
        setIsError(true)
        setErrMssg(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="home">
      {isLoading && <Loading />}
      {isError && <Error errMssg={errMssg} getPhotos={getPhotos} setIsLoading={setIsLoading} setIsError={setIsError} />}
      {!isError && <PhotoList photos={photos} />}
    </div>
  )
}

export default Home