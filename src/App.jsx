import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import Webgi from "./components/Webgi";
import { useCallback, useRef } from "react";

// global main
function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  // change to interacte mode
  const handlePreview = useCallback(() => {
    webgiViewerRef.current.triggerPreview();
  }, []);

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <Webgi contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
