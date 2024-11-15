import { Sidebar } from "../components";
import Completed from "../components/completed/Completed";

function CompletedPage() {
  return (
    <div className=" flex h-[100vh] ">
      <Sidebar />
      <Completed/>
    </div>
  );
}

export default CompletedPage;
