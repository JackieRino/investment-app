
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from "recharts";

export function OutputData(props){

const resultData= props.InvestmentCalculator;
const initialIinvestment= resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvest;

const formatter= props.Formatter;

const highestInterest = Math.max(...resultData.map((item)=>item.interest));



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
                <th className="columnHead">Investment</th>
                <th className="columnHead">Interest (year)</th>
                <th className="columnHead">Total Interest</th>
                <th className="columnHead">Total Amount Investment</th>
              </tr>
          </thead>
          <tbody>
                {resultData.map((oneObject,index)=>{

  

                  const totalInterest= oneObject.valueEndOfYear - oneObject.annualInvest* oneObject.year- initialIinvestment;

                  const totalAmountInvested= oneObject.valueEndOfYear - totalInterest;

                  const isHighestInterest = oneObject.interest === highestInterest;

               return   <tr key={index}
                            style={{backgroundColor: isHighestInterest ? "rgb(90, 244, 95)" : "transparent"}}>
                     
                    <td>{oneObject.year}</td>
                    <td>{formatter.format(oneObject.valueEndOfYear)}</td>
                    <td>{formatter.format(oneObject.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                  </tr>

            })}
          </tbody>

      </table>
  
            <h2 className="text-white m-5" >Investment Growth Over Time</h2>
            <ResponsiveContainer width="80%" height={300}>
                <LineChart data={resultData}>

                <CartesianGrid strokeDasharray={"3 3"}/>
                <XAxis dataKey="year"
                        label={{value:"Year", position:"insideBottom", offset:-5}}/>
                
                <YAxis tickFormatter={(value)=>formatter.format(value)}/>

                <Legend/>
                <Line type="monotone"
                      dataKey="valueEndOfYear"
                      name="Investment Value"
                      stroke="#2563eb"
                      strokeWidth={3}/>



                </LineChart>

            </ResponsiveContainer>
  
  </>


}


