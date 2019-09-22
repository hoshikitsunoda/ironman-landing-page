import React from 'react'

const ComicSlider = props => {
  console.log(props.comicsData[0])
  return (
    <div>
      {props.comicsData.map((item, i) => {
        console.log(item)
        const comicImagePath = item && item.images[0].path
        const comicImageExtension = item && item.images[0].extension
        const comicImage = `${comicImagePath}.${comicImageExtension}`

        const link = item.urls[0].url

        return (
          <div key={i}>
            <a href={link} target="_blank">
              <img src={comicImage} alt={`comic-${i}`} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default ComicSlider
