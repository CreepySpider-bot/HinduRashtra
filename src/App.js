import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Blogs from "./Components/Blogs/Blogs";
import Events from "./Components/Events/Events";
import Feedback from "./Components/Feedback/Feedback";
import Intro from "./Components/Intro/Intro";
import Lastpart from "./Components/Lastpart/Lastpart";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import PodcastPlayer from "./Components/Podcast/Podcast";
import Resources from "./Components/Resources/Resources";
import Shop from "./Components/Shop/Shop";
import Tours from "./Components/Tours/Tours";
import Videos from "./Components/Videos/Videos";
import Kids from "./Components/Kids/Kids";

function App() {
  return (
    <div className="App">
        <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/tours" element={<Tours />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/podcast" element={<PodcastPlayer />}/>
            <Route path="/videos" element={<Videos />}/>
            <Route path="/resource" element={<Resources />}/>
            <Route path="/kids" element={<Kids />}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/last" element={<Lastpart />}/>
            <Route path="/feedback" element={<Feedback />}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
