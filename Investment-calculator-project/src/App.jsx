import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"


function App() {

  const [userInputs, setUserInputs] = useState({
                                                initialInvestment: 10000,
                                                annualInvestment: 1000,
                                                expectedReturn: 10,
                                                duration: 10
                                            })

  return (
    <>
    <Header />
    <UserInput userInputs = {userInputs} setUserInputs = {setUserInputs} />
    <Results Input = {userInputs} />
    </>
  )
}

export default App
