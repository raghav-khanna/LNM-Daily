import FeedPage from "./Pages/Feed Page/FeedPage";
import Parent from "./Pages/Parent/Parent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clubs from "./Pages/Clubs/Clubs";
import CreatePost from "./Pages/Create Post/CreatePost";
import Footer from "./Pages/Footer/Footer";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<FeedPage />}></Route>
          <Route path="clubs" element={<Clubs />}></Route>
          <Route path="new_post" element={<CreatePost/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
        <Route path="*" element={<div><h1>Error!</h1>Change URL to /</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
