import React from 'react'
import Slider from 'react-slick'

import styled from 'styled-components'

const ComicSlider = props => {
  const settings = {
    dots: false,
    infinite: true,
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
  .slick-list {
    padding: 2rem 0 2rem;
    margin-left: -1rem;

    .slick-slide {
      margin: 0 1.5rem 0 0;

      img {
        width: 100%;
      }
    }

    @media (min-width: 767px) {
      padding: 7rem 0 4rem;
    }
  }
`

export default ComicSlider
