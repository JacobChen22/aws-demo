import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
