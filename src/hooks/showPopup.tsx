import { useState } from 'react'

interface ShowPopupProps {
  isShowing: boolean
  togglePopup: () => void
}

type Hook = () => ShowPopupProps

const ShowPopup: Hook = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)

  const togglePopup = () => {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    togglePopup,
  }
}

export default ShowPopup
