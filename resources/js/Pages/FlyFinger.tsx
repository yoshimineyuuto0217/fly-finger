import FlySideBar from './components/FlySideBar'

const FlyFinger = ( {children}: {children:React.ReactNode}) => {
  return (
    <>
    <div className='flex'>
        <FlySideBar/>
        <div>
            {children}
        </div>
    </div>
    </>
  )
}

export default FlyFinger
