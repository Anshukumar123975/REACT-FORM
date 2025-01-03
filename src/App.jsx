import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/form";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Form />} />
      </Routes>
    </Router>
  )
}

export default App;