import About from './pages/about/About'
import Home from './pages/home/Home'
import Accomodation from './pages/accomodation/Accomodation'
import NotFound from './pages/notFound/NotFound'
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Route exact path= '/'>
                <Home />
            </Route>
            <Route path= '/accomodation/:accomodationNumber'>
                <Accomodation />
            </Route>
            <Route path= '/about'>
                <About />
            </Route>
            <Route path= '*'>
                <NotFound />
            </Route>
        </Router>
    )
}

export default App;
