import { Sidebar } from "../components";
import Completed from "../components/completed/Completed";

function CompletedPage() {
  return (
    <div className=" flex ">
      <Sidebar />
      <Completed/>
    </div>
  );
}

export default CompletedPage;
