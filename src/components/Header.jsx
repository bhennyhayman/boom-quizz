import { NavLink } from "react-router-dom"
export default function Header (){
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <NavLink to="/">
      <h1 className="text-2xl">Quiz App</h1>
      </NavLink>
      
    </header>
  )
}