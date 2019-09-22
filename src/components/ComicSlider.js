import React from 'react'
import Slider from 'react-slick'

import styled from 'styled-components'

const ComicSlider = props => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
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
  .slick-slide {
    margin: 0 1rem;
  }

  .slick-slide img {
    width: 100%;
  }

  .slick-list {
    padding: 2rem 20% 2rem 0;

    @media (min-width: 767px) {
      padding: 7rem 20% 4rem 0;
    }
  }
`

export default ComicSlider
