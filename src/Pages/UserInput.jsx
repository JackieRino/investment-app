import { useState } from "react"



export const UserInput = () => {

const initialValues={begInvestment: "4000", 
                     annInvestment: 1200,
                    returnInv:6,                                       
                     yearInv:35};

const [customerInput, setCustomerInput]= useState(initialValues);



function callUserInput( inputId,val){

    if(val > 0){

return(  setCustomerInput((prev)=>({
    ...prev, 
    [inputId]:val
    })))

    }else {
        alert("Please Enter Valid Values.");
    }
  
}

function resetInputFeilds(){
        setCustomerInput(initialValues);
}

  return (
    <section id="userInput">
        <div className="inputGroup">
            <p>
                <label> Beginning  Investment (£)</label>
                <input type="number" size="20" required value={customerInput.begInvestment} onChange={(e)=> callUserInput('begInvestment',e.target.value, )} />
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Annual Investment (£)</label>
                <input type="number" size="20" required value={customerInput.annInvestment} onChange={(e)=> callUserInput('annInvestment',e.target.value)}/>
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Return Expected (%)</label>
                <input type="number" size="20" required value={customerInput.returnInv} onChange={(e)=> callUserInput('returnInv',e.target.value)}/>
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Year  Investment</label>
                <input type="number" size="20" required value={customerInput.yearInv} onChange={(e)=> callUserInput('yearInv',e.target.value)}/>
            </p>
        </div>
      
        <button id="resetButton" type="button" onClick={resetInputFeilds}>Reset</button>
    </section>
  )
}


