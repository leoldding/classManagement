import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <>
          <Router>
            <Routes>
              <Route path={"/"}></Route>
              <Route path={"*"} element={<Navigate to="/" replace />}></Route>
            </Routes>
          </Router>
        </>
    )
  }

}

export default App;
