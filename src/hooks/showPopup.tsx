import { useState } from 'react'

const ShowPopup = () => {
  const [isShowing, setIsShowing] = useState(false)

  const togglePopup = () => {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    togglePopup,
  }
}

export default ShowPopup
