export interface CharacterProps {
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

export interface CopyDataProps {
  characterData: { thumbnail: { path: string; extension: string } }
}

export interface HeroDataProps {
  characterData: { description: string }
}
