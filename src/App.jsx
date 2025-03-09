import { useState } from 'react'
import './App.css'
// import Header from './components/Header'
// import Question from './components/Question'
import AppRouter from './AppRouter';

function App() {
  return (
    <>
      <div>
       {/* <Header />
       <div className='p-2 mt-5 justify-self-center text-2xl underline'>Answer the questions </div>

       <Question /> */}
        <AppRouter />
      </div>
    </>
  )
}

export default App
