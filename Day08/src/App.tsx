import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./components/Home";
import Routing from "./Routing.js";
import About from "./components/About";
import EventLoopTest from "./EventLoopTest.tsx";
import { RoomProvider } from './context/RoomContext';
import DetailTab from './DetailTab';

export default function App() {
  return (
    <RoomProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routing />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/cardlist" element={<CardList />} />
            <Route path="/card/:roomId" element={<Card />} />
            <Route path="/about" element={<About />} />
            <Route path="/event-loop-test" element={<EventLoopTest />} />
            <Route path="/detail/:id" element={<DetailTab />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RoomProvider>
  );
}