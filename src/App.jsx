

import './App.css'
import { Header } from './Pages/Header'
import { UserInput } from './Pages/UserInput';
import { useInputBindingHook } from './Pages/InputBindingHook';


function App() {
 
  const headinginfo={title:"Investment App",
                    subtitle:" Meet Your Financial InvestMate"
  };
// when you need the updater function.. add it below
  const {callUserInput, resetInputFeilds,customerInput} = useInputBindingHook();


  
console.log(customerInput);
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
</div>

    </div>

    </>
  )
}

export default App
