export class Comics {
  constructor(
    public comicImage: string,
    public comicLink: string,
    public comicTitle: string
  ) {}
}

export interface ComicsDataProps {
  comicsData: {
    images: {
      path: string
      extension: string
    }[]
    urls: {
      url: string
    }[]
    title: string
  }[]
}

export interface SliderSetting {
  dots: boolean
  infinite: boolean
  slidesToShow: number
  slidesToScroll: number
  adaptiveHeight: boolean
  arrows: boolean
  responsive: SliderResponsiveSetting[]
}

interface SliderResponsiveSetting {
  breakpoint: number
  settings: {
    slidesToShow: number
    slidesToScroll: number
  }
}
