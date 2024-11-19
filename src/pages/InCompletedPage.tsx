
import { Sidebar } from '../components'
import InCompleted from '../components/inCompleted/InCompleted'

const InCompletedPage = () => {
  return (
    <div className=" flex h-[100vh] ">
    <Sidebar />
    <InCompleted/>

  </div>
  )
}

export default InCompletedPage