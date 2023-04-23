
import React from "react";
import Layout from "./components/layout/Layout.js";
import Routes from "./routes";
import { useLocation } from 'react-router-dom';
import "./assets/css/App.css"

function App() {
  const location = useLocation();
  const currentPage = location.pathname.split('/').pop();
  return (
    <div className="App">
        <Layout currentPage={currentPage}>
          <Routes/>
        </Layout>
    </div>
  );
}

export default App;
