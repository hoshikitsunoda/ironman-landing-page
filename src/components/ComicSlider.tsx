import React from 'react'
import Slider from 'react-slick'
import { Comics, ComicsDataProps, SliderSetting } from '../models/ComicSlider'

import styled from 'styled-components'

const ComicSlider: React.FC<ComicsDataProps> = (props: ComicsDataProps) => {
  const settings: SliderSetting = {
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
      {props.comicsData.map((item, i: number) => {
        const comic = new Comics(
          `${item && item.images[0].path}.${item && item.images[0].extension}`,
          item.urls[0].url,
          item.title
        )

        return (
          <div key={i}>
            <a href={comic.comicLink} rel="noopener noreferrer" target="_blank">
              <img src={comic.comicImage} alt={`${comic.comicTitle}`} />
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
