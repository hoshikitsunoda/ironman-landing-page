export interface CharaProps {
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface ComicsProps {
  images: {
    path: string
    extension: string
  }[]
  urls: {
    url: string
  }[]
  title: string
}
