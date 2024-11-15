import { calculateInvestmentResults, formatter } from "../util/investment"


export default function Results({Input}){

    const resultsdata = calculateInvestmentResults(Input)

    if(resultsdata.length === 0){
        return <p className="center">Invalid input</p>
    }

    const initialInvestment = resultsdata[0].valueEndOfYear - resultsdata[0].annualInvestment- resultsdata[0].interest;
    console.log(resultsdata)
    return (
        <table id="result">
    <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest Earned</th>
            <th>Invested Capital</th>
        </tr>
    </thead>
    <tbody>
        {resultsdata.map((data, index) => {
            

            const totalIntrest = data.valueEndOfYear - data.annualInvestment*data.year - initialInvestment;

            return (
            <tr key={index}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(initialInvestment)}</td>
            </tr>
        )})}
    </tbody>
</table>

    );
} 