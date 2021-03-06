import axios, { AxiosResponse } from 'axios'
import { CharacterProps, ComicsProps } from '../models/Props'

type Fetch = (urls: string[], paramSetting: {}) => Promise<AxiosResponse<{}>[]>

const fetchData: Fetch = async (urls: string[], paramSetting: {}) => {
  let charaResult: Promise<AxiosResponse<CharacterProps>> = axios.get<
    CharacterProps
  >(urls[0], paramSetting)
  let comicsResult: Promise<AxiosResponse<ComicsProps[]>> = axios.get<
    ComicsProps[]
  >(urls[1], paramSetting)

  const promises: Promise<AxiosResponse<{}>>[] = [
    Promise.resolve(charaResult),
    Promise.resolve(comicsResult),
  ]

  return await axios.all(promises)
}

export default fetchData
