import { Sidebar } from "../components";
import Upcoming from '../components/upcoming/Upcoming'
function UpcomingPage() {
  return (
    <div className=" flex ">
    
      <Sidebar />
      <Upcoming/>
      
    </div>
  );
}

export default UpcomingPage;
