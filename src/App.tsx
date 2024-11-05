

import { useSelector } from 'react-redux'
import './App.css'
import { Sidebar } from './components'
import { InitialState } from './redux/reducers/type'





function App() {
const todo=useSelector((state:InitialState)=>state.todo)
console.log(todo)


  return (
    <div className='flex'>
   <Sidebar/>
   
    </div>
  )
}

export default App
