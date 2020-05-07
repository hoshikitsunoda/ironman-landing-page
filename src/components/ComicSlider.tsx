import React from 'react'
import Slider from 'react-slick'

import styled from 'styled-components'

interface ComicsDataProps {
  comicsData: {
    images: {
      path: string
      extension: string
    }[]
    urls: {
      url: string
    }[]
  }[]
}

const ComicSlider: React.FC<ComicsDataProps> = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6.5,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <StyledSlider {...settings}>
      {props.comicsData.map((item, i) => {
        const comicImagePath = item && item.images[0].path
        const comicImageExtension = item && item.images[0].extension
        const comicImage = `${comicImagePath}.${comicImageExtension}`

        const link = item.urls[0].url

        return (
          <div key={i}>
            <a href={link} rel="noopener noreferrer" target="_blank">
              <img src={comicImage} alt={`comic-${i}`} />
            </a>
          </div>
        )
      })}
    </StyledSlider>
  )
}

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 2rem 0 2rem;
    margin-left: -3rem;

    .slick-slide {
      margin: 0 1.5rem 0 0;

      img {
        width: 100%;
      }
    }

    @media (min-width: 768px) {
      padding: 7rem 0 4rem;
      margin-left: -2rem;
    }
  }
`

export default ComicSlider
