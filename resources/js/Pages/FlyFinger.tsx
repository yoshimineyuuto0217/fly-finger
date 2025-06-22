import FlySideBar from './components/FlySideBar'
import { ModalProvider } from './context/modalContext'

const FlyFinger = ( {children}: {children:React.ReactNode}) => {
  return (
    <>
    <ModalProvider>
    <div className='flex'>
        <FlySideBar/>
        <div>
            {children}
        </div>
    </div>
    </ModalProvider>
    </>
  )
}

export default FlyFinger
