import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Enlace1 from "../pages/Enlace1";
import NotFound from "../pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path= '/' element= {<Home/>}/>
                <Route exact path='/Enlace1' element={<Enlace1/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;