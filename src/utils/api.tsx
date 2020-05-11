import axios, { AxiosResponse } from 'axios'
import { urlCharacter, urlComics, paramsSetting } from '../data/api'
import { CharacterProps, ComicsProps } from '../models/Props'

const fetchData = async (): Promise<AxiosResponse<{}>[]> => {
  let charaResult: Promise<AxiosResponse<CharacterProps>> = axios.get<
    CharacterProps
  >(urlCharacter, paramsSetting)
  let comicsResult: Promise<AxiosResponse<ComicsProps[]>> = axios.get<
    ComicsProps[]
  >(urlComics, paramsSetting)

  const promises: Promise<AxiosResponse<{}>>[] = [
    Promise.resolve(charaResult),
    Promise.resolve(comicsResult),
  ]

  return await axios.all(promises)
}

export default fetchData
