
import './App.css'
import { Header } from './Pages/Header'
import { UserInput } from './Pages/UserInput';


function App() {
 
  const headinginfo={title:"Investment App",
                    subtitle:" Meet Your Financial InvestMate"
  };

  return (
    <>
           <div className="min-h-screen bg-slate-900 flex-col items-center justify-center m-4"> 
<div className='text-center'>
        <Header PageTitle={headinginfo.title} Subtitle={headinginfo.subtitle}/>
        
        <UserInput/>
</div>

    </div>

    </>
  )
}

export default App
