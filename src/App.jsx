import { Suspense } from 'react'
import './App.css'
import AddUser from './components/AddUser'

function App() {
  const usersData = fetch("http://localhost:3000/users").then(res => res.json())
  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <AddUser usersData={usersData}></AddUser>
      </Suspense>
    </>
  )
}

export default App
