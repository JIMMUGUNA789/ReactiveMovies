
import './App.css'
import Sidebar from './components/sidebar'
import MainArea from './components/mainArea'
import SiteTitle from './components/SiteTitle'

function App() {

  return (
    <>
    <div className=''>
      <div className='row'>
        <Sidebar></Sidebar>
        <MainArea>
        <SiteTitle></SiteTitle>

        </MainArea>

      </div>

    </div>
    </>
  )
}

export default App
