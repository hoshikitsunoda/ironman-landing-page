import md5 from 'md5'
import { AxiosRequestConfig } from 'axios'

const characterCode: string = '1009368'
export const urlCharacter: string = `https://gateway.marvel.com:443/v1/public/characters/${characterCode}`
export const urlComics: string = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=Iron%20Man`

export const publicKey: string | undefined =
  process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
export const privateKey: string | undefined =
  process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
export const timestamp: string = process.env.REACT_APP_MARVEL_TIMESTAMP!

export const hash: string = md5(timestamp + privateKey + publicKey)
export const paramsSetting: AxiosRequestConfig = {
  params: {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
  },
}
