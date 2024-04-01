import { Route, Routes } from "react-router-dom";
import {Nav,Feed, VideoDetail, ChannelDetail, SearchFeed} from './components'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path = '/channel/:id' element= {<ChannelDetail />} />
        <Route path = '/search/:search' element={<SearchFeed />} />
      </Routes>
    </div>
  );
}

export default App;
