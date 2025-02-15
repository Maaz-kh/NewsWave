import "./App.css";
import React, {useState} from 'react'
import NavBar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  let newsapiKey = import.meta.env.VITE_NEWS_API;  // API Key

  const [progress, setProgress] = useState(0);      // loading spinner

  const pageSize = "9";      

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar
          color="#f11946"
          height={2}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        /> 
        <div id="newsContainer" className="">
        
          <Routes>
            <Route
              path="/"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="general" pageSize= {pageSize} />}
            />
            <Route
              path="/home"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="general" pageSize= {pageSize} />}
            />
            <Route
              path="/business"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="business" pageSize= {pageSize} />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="entertainment" pageSize= {pageSize} />}
            />
            <Route
              path="/general"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="general" pageSize= {pageSize} />}
            />
            <Route
              path="/health"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="health" pageSize= {pageSize} />}
            />
            <Route
              path="/science"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="science" pageSize= {pageSize} />}
            />
            <Route
              path="/technology"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="technology" pageSize= {pageSize} />}
            />
            <Route
              path="/sports"
              element={<News setProgress = {setProgress} apiKey = {newsapiKey} category="sports" pageSize= {pageSize} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App
