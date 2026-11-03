import { useState } from "react"



export const UserInput = () => {

const [customerInput, setCustomerInput]= useState({ begInvestment: "4000", 
                                                    annInvestment: 1200,
                                                    returnInv:6,
                                                    yearInv:35
                                                    });

function callUserInput( inputId,val){
    setCustomerInput((prev)=>({
    ...prev, 
    [inputId]:val
    }))
}

console.log(customerInput);

  return (
    <section id="userInput">
        <div className="inputGroup">
            <p>
                <label> Beginning Investment</label>
                <input type="number" size="20" required value={customerInput.begInvestment} onChange={(e)=> callUserInput('begInvestment',e.target.value, )} />
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Annual Investment</label>
                <input type="number" size="20" required value={customerInput.annInvestment} onChange={(e)=> callUserInput('annInvestment',e.target.value)}/>
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Return Expected</label>
                <input type="number" size="20" required value={customerInput.returnInv} onChange={(e)=> callUserInput('returnInv',e.target.value)}/>
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Year Investment</label>
                <input type="number" size="20" required value={customerInput.yearInv} onChange={(e)=> callUserInput('yearInv',e.target.value)}/>
            </p>
        </div>
      
    </section>
  )
}


