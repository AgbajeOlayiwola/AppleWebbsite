import { useRef } from 'react'
import DisplaySection from './components/DisplaySection'
import Jumbotron from './components/Jumbotron'
import Nav from './components/Nav'
import WebGIViewer from './components/WebGiViewer'
import SoundSection from './components/soundSection'
import Loader from './components/Loader'

function App() {
  const webgiviewerRef = useRef(null)
  const contentRef = useRef()

  const handlePreview = () => {
    webgiviewerRef.current.triggerPreview()
  }
  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>

      <WebGIViewer contentRef={contentRef} ref={webgiviewerRef} />
    </div>
  )
}

export default App
