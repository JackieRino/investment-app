

export function OutputData(props){

const resultData= props.InvestmentCalculator;
const initialIinvestment= resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvest;

const formatter= props.Formatter


  return <>

<div id="allSummaryCards">

              <div className="summaryCard">

                <h2>Total Invested Amount</h2>
                <p className="figure">pending</p>

              </div>

              <div className="summaryCard">
                <h2>Total Interest Earned</h2>
                <p className="figure">pending</p>

              </div>
               <div>
              <button className="center" onClick={props.ReportGenerator}>Generate Report</button>
            </div>

            </div>

            

      <table>
          <thead>
              <tr>
                <th className="columnHead">Year</th>
                <th className="columnHead">Investment(£)</th>
                <th className="columnHead">Interest (year)</th>
                <th className="columnHead">Total Interest</th>
                <th className="columnHead">Total Amount Investment</th>
              </tr>
          </thead>
          <tbody>
                {resultData.map((oneObject,index)=>{

  

                  const totalInterest= oneObject.valueEndOfYear - oneObject.annualInvest* oneObject.year- initialIinvestment;

                  const totalAmountInvested= oneObject.valueEndOfYear - totalInterest;

               return   <tr key={index}>
                     
                    <td>{oneObject.year}</td>
                    <td>{formatter.format(oneObject.valueEndOfYear)}</td>
                    <td>{formatter.format(oneObject.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                  </tr>

            })}
          </tbody>

      </table>
  
            
  
  </>


}


