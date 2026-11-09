
import { useState } from "react";
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,ResponsiveContainer } from "recharts";


export function OutputData(props){

const [view,setView] = useState("yearly");

const resultData= props.InvestmentCalculator;
const initialIinvestment= resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvest;

const formatter= props.Formatter;

const highestInterest = Math.max(...resultData.map((item)=>item.interest));

const finalResult= resultData[resultData.length-1];

const totalInterestEarned= finalResult ? finalResult.valueEndOfYear - finalResult.annualInvest * finalResult.year - initialIinvestment : 0;


const totalInvested= finalResult? finalResult.valueEndOfYear - totalInterestEarned : 0;

  return <>

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

          <tfoot>
              <tr>
                <th colSpan="3" >Total Interest Earned</th>
                <th>{formatter.format(totalInterestEarned)}</th>
              </tr>

              <tr>
                <th colSpan="3">Total Invested</th>
                <th>{formatter.format(totalInvested)}</th>

              </tr>

          </tfoot>

      </table>

   <div>
              <button className="center text-white" onClick={props.ReportGenerator}>Generate Report</button>
  </div>


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


