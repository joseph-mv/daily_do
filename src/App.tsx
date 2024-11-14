
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upcoming from './pages/UpcomingPage';
import Completed from './pages/CompletedPage';

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </div>
    </Router>
  )
}
