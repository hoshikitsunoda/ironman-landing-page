import axios from 'axios'
import { urlCharacter, urlComics, paramsSetting } from '../data/api'

const fetchData = async () => {
  let charaResult = axios.get(urlCharacter, paramsSetting)
  let comicsResult = axios.get(urlComics, paramsSetting)

  const promises = [Promise.resolve(charaResult), Promise.resolve(comicsResult)]

  return await axios.all(promises)
}

export default fetchData
