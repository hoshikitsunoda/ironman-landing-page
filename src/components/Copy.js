import React from 'react'

import styled from 'styled-components'

const Copy = () => {
  return (
    <div>
      <HeadingWrapper className="text-wrapper heading">
        <p>Contrary to popular belief, he knows exactly what he’s doing.</p>
      </HeadingWrapper>
    </div>
  )
}

const HeadingWrapper = styled.div`
  text-align: center;
  padding: 3rem;

  p {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`

export default Copy
