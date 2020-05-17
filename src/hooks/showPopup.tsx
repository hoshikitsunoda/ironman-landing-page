import { useState } from 'react'

interface ShowPopupStatus {
  isShowing: boolean
  togglePopup: () => void
}

type Hook = () => ShowPopupStatus

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
