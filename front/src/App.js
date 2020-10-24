import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Update from "./component/Update"
import Index from "./component/Index"

function App() {
  return (
    <div>
      <Router>
        <Route path="/editer/:slug" exact component={Update} />
        <Route path="/"  exact component={Index} />
      </Router>
    </div>
  )
}

export default App
