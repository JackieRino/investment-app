

import './App.css'
import { Header } from './Pages/Header'
import { UserInput } from './Pages/UserInput';
import { useInputBindingHook } from './Pages/InputBindingHook';
import { OutputData } from './Pages/OutputDisplay';
import { CalculateInvestmentResults } from './Pages/InvestmentCalculator';
import { generatepdf } from './Pages/GeneratePdf';
import { useState } from 'react';



function App() {
 
  const headinginfo={title:"Investment App",
                    subtitle:" Meet Your Financial InvestMate"
  };

const [curr, setCurr]=useState("GBP");
const Formatter= new Intl.NumberFormat("en-GB",{style:"currency", 
                                                       currency: curr,
                                                       minimumFractionDigits:0,
                                                       maximumFractionDigits:0});




// when you need the updater function.. add it below
  const {callUserInput, resetInputFeilds,customerInput} = useInputBindingHook();
  const calculateInvestment= CalculateInvestmentResults(customerInput);

function handleGenerateReport(){
  const resData= calculateInvestment;
  generatepdf({...customerInput,results:resData})
};
  


function currencyChanger(currency){

  switch (currency){
    case "GBP":
      setCurr("GBP")
      break;

    case "EUR":
      setCurr("EUR")
      break;
    
    case "USD":
      setCurr("USD")
      break;

    default:
      setCurr("GBP");
  }
}


  return (
    <>
           <div className="min-h-screen bg-slate-900 flex-col items-center justify-center m-4"> 
<div className='text-center'>


        <Header PageTitle={headinginfo.title} Subtitle={headinginfo.subtitle}/>
        
        <UserInput BegInv={customerInput.begInvestment}
                    AnnInv={customerInput.annInvestment}
                    RetInv={customerInput.returnInv}
                    YearInv={customerInput.yearInv}
                    OnChangeFunction={callUserInput}
                    OnClick={resetInputFeilds}/>
        <div>
        <button className='currencyButton' onClick={()=>currencyChanger("EUR")}>EUR</button>
        <button className='currencyButton'  onClick={()=>currencyChanger("USD")}>USD</button>
        <button className='currencyButton'  onClick={()=>currencyChanger("GBP")}>GBP</button>
        </div>
        <OutputData InvestmentCalculator={calculateInvestment} 
                    Formatter={Formatter} 
                    ReportGenerator={handleGenerateReport}/>
</div>

    </div>

    </>
  )
}

export default App
