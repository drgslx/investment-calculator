import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState(
    {initialInvestment: null, 
    annualInvestment: null,
    expectedReturn: null,
    duration: null}
)

const inputIsValid = userInput.duration >= 1;



function handleChange(inputIdentifier, newValue) {
setUserInput(prevInput => {
return {
    ...prevInput,
    [inputIdentifier]: +newValue,
}
})
}
return (
  <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && (
      <p className="center">Please enter a duration greater than zero.</p>
    )}
    {inputIsValid && <Results input={userInput} />}
  </>
);
}

export default App;
