const characterCode = '1009368'
export const urlCharacter = `https://gateway.marvel.com:443/v1/public/characters/${characterCode}`
export const urlComics = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=Iron%20Man`

export const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
export const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
export const timestamp = process.env.REACT_APP_MARVEL_TIMESTAMP!
