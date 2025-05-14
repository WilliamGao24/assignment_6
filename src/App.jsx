import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from './context/context';
import HomeView from "./Views/HomeView.jsx";
import RegisterView from "./Views/RegisterView.jsx";
import LoginView from "./Views/LoginView.jsx";
import MoviesView from './Views/MoviesView.jsx';
import DetailMovieView from "./Views/DetailView.jsx";
import GenreView from "./Views/GenreView.jsx";
import ErrorView from "./Views/ErrorView.jsx";

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/register" element={<RegisterView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/movies" element={<MoviesView />}>
                        <Route path="genre/:genre_id" element={<GenreView />} />
                        <Route path="details/:id" element={<DetailMovieView />} />
                    </Route>
                    <Route path="*" element={<ErrorView />} />
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;