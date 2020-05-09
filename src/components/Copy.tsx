import React from 'react'
import CopyPanel from './CopyPanel'

import styled from 'styled-components'

interface CharacterDataProps {
  characterData: { thumbnail: { path: string; extension: string } }
}

const Copy: React.FC<CharacterDataProps> = (props: CharacterDataProps) => {
  const imgSrcPath: string =
    props.characterData.thumbnail && props.characterData.thumbnail.path
  const imgSrcExtension: string =
    props.characterData.thumbnail && props.characterData.thumbnail.extension
  const imgSrc: string = `${imgSrcPath}.${imgSrcExtension}`
  return (
    <CopyWrapper className="copy-wrapper">
      <HeadingWrapper className="text-wrapper heading">
        <p>Contrary to popular belief, he knows exactly what he’s doing.</p>
      </HeadingWrapper>
      <CopyContentWrapper className="copy-content-wrapper">
        <ImageWrapper className="image-wrapper">
          <img src={imgSrc} alt="thumbnail" className="thumbnail" />
        </ImageWrapper>
        <CopyPanel />
      </CopyContentWrapper>
    </CopyWrapper>
  )
}

const CopyWrapper = styled('div')`
  padding: 0 1.2rem;
  max-width: 1440px;
  margin: 0 auto;

  .thumbnail {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 1.2rem;
  }
`

const HeadingWrapper = styled('div')`
  text-align: center;
  padding: 3rem 2.5rem;

  p {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 2rem;
    }
  }
`

const CopyContentWrapper = styled('div')`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`

const ImageWrapper = styled('div')`
  @media (min-width: 768px) {
    padding: 0 0 2rem 0;
  }

  @media (min-width: 1024px) {
    flex: 0 1 35%;
    padding: 0 5rem 0 0;
  }
`

export default Copy
