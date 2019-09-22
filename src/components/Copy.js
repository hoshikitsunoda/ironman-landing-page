import React from 'react'

import styled from 'styled-components'

const Copy = props => {
  const imgSrcPath =
    props.characterData.thumbnail && props.characterData.thumbnail.path
  const imgSrcExtension =
    props.characterData.thumbnail && props.characterData.thumbnail.extension
  const imgSrc = `${imgSrcPath}.${imgSrcExtension}`
  return (
    <CopyWrapper>
      <HeadingWrapper className="text-wrapper heading">
        <p>Contrary to popular belief, he knows exactly what he’s doing.</p>
      </HeadingWrapper>
      <div>
        <img src={imgSrc} alt="thumbnail" />
      </div>
    </CopyWrapper>
  )
}

const CopyWrapper = styled.div`
  padding: 0 1.2rem;

  img {
    width: 100%;
  }
`

const HeadingWrapper = styled.div`
  text-align: center;
  padding: 3rem 2.5rem;

  p {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`

export default Copy
