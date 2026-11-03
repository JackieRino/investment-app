import { useState } from "react"

// when you declare this at the parent youll add the parameters its child needs
export function useInputBindingHook(){

    const initialValues={begInvestment: 4000, 
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

  return {callUserInput,resetInputFeilds, customerInput, setCustomerInput}
}


