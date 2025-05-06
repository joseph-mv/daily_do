
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upcoming from './pages/UpcomingPage';
import Completed from './pages/CompletedPage';
import { DateContext } from './contextAPI/context';
import { useState } from 'react';
import InCompletedPage from './pages/InCompletedPage';
import PomodoroInfo from './pages/Pomodoro';

export const App = () => {
  const [date, setDate] = useState<Date>(new Date());
 
  return (
    <DateContext.Provider value={{date,setDate}} >
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/in_completed" element={<InCompletedPage />} />
          <Route path="/pomodoro" element={<PomodoroInfo />} />
        </Routes>
      </div>
    </Router>
    </DateContext.Provider>
  )
}
