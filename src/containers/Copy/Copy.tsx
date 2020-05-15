import React from 'react'
import CopyPanel from '../../components/CopyPanel/CopyPanel'
import { CopyDataProps } from '../../models/Props'

import styled from 'styled-components'
import * as Styled from '../../components/styled'

const Copy: React.FC<CopyDataProps> = (props: CopyDataProps) => {
  const { thumbnail } = props.characterData

  const imgSrcPath: string = thumbnail && thumbnail.path
  const imgSrcExtension: string = thumbnail && thumbnail.extension
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

  @media ${(props) => props.theme.device.tablet} {
    padding: 0 3rem;
  }

  @media ${(props) => props.theme.device.laptop} {
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

  @media ${(props) => props.theme.device.tablet} {
    p {
      font-size: 2rem;
    }
  }
`

const CopyContentWrapper = styled('div')`
  @media ${(props) => props.theme.device.laptop} {
    ${Styled.flexbox('row', 'center', 'flex-start')}
  }
`

const ImageWrapper = styled('div')`
  @media ${(props) => props.theme.device.tablet} {
    padding: 0 0 2rem 0;
  }

  @media ${(props) => props.theme.device.laptop} {
    flex: 0 1 35%;
    padding: 0 5rem 0 0;
  }
`

export default Copy
