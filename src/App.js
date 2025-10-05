import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

const App = () => {
  let apiKey = process.env.REACT_APP_API_KEY;
  
  const [currentProgress, setProgress] = useState(0);
  let categoriesList = ["business", "health", "science", "sports", "technology", "entertainment"];
  
  return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="cyan"
            height={3}
            progress={currentProgress}
          />
          <Routes>
            <Route path="/home" element={<News category="general" setProgress={setProgress} apiKey={apiKey}/>} />
            <Route path="/" element={<News category="general" setProgress={setProgress} apiKey={apiKey}/>} />
            <Route path="/about" element={<About/>} />
            {categoriesList.map((cat) => (<Route path={`/${cat}`} element={<News category={cat} setProgress={setProgress} apiKey={apiKey}/>} />))}
          </Routes>
        </Router>
      </div>
    );
};

export default App;