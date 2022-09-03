import FeedPage from "./Pages/Feed Page/FeedPage";
import Parent from "./Pages/Parent/Parent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clubs from "./Pages/Clubs/Clubs";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Parent/>}>
            <Route index element={<FeedPage/>}></Route>
            <Route path="clubs" element={<Clubs/>}></Route>
        </Route>
        <Route path='*' element={<div><h1>Error!</h1>Change URL to /</div>}/>
      </Routes>


      
      <div style={{backgroundColor:'#2196f3', borderTop:'0.25rem black solid'}}>
        <div>
          <h4>Rights Reserved ® <br/>
          ..<br/>
          Created by</h4>
          Nirnay(@nirnaykorde)<br/>
          Pranav(@pranavchatur)<br/>
          Raghav(@raghavkhanna)<br/>
          Sourav(@souravjan)<br/>
          ..<br/>
          <h4>Made using React, Material UI, CassandraDB, NodeJS</h4>
          <hr/>
          <hr/>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
