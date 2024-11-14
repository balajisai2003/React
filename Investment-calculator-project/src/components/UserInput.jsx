import Field from "./Field"

export default function UserInput({userInputs, setUserInputs}) {

    
    
    function handleUserInput(identifier, value) {
        setUserInputs((prevUserInputs) => {
            return {
                ...prevUserInputs,
                [identifier]: +value
            }
        })
        console.log("User input: ", userInputs)
        console.log("Identifier: ", identifier)
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <Field type="number" value={userInputs.initialInvestment} identifier="initialInvestment" onNewInput={handleUserInput} >INITIAL INVESTMENT</Field>
                <Field type="number" value={userInputs.annualInvestment} identifier="annualInvestment" onNewInput={handleUserInput}>ANNUAL INVESTMENT</Field>
            </div>
            <div className="input-group">
                <Field type="number" value={userInputs.expectedReturn} identifier="expectedReturn" onNewInput={handleUserInput}>EXPECTED RETURN</Field>
                <Field type="number" value={userInputs.duration} identifier="duration" onNewInput={handleUserInput}>DURATION</Field>
            </div>
        </section>
    )
}