import FlySideBar from './components/FlySideBar'
import { ModalProvider, useModal } from './context/modalContext'

const FlyFinger = ( {children}: {children:React.ReactNode}) => {
    const {darkMode} = useModal();
  return (
    <>
    <div className={`Mode ${darkMode ? "dark" : "light"} flex`}>
        <FlySideBar/>
        <div className={`w-[70%] mx-auto Mode ${darkMode ? "dark" : "light"}`}>
            {children}
        </div>
    </div>
    </>
  )
}

export default FlyFinger
