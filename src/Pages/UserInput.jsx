



export const UserInput = (props) => {


  return (
    <section id="userInput">
        <div className="inputGroup">
            <p>
                <label> Beginning  Investment (£)</label>
                <input type="number" size="20" required value={props.BegInv} onChange={(e)=> props.OnChangeFunction("begInvestment",e.target.value)} />
            </p>
        </div>



         <div className="inputGroup">
            <p>
                <label> Annual Investment (£)</label>
                <input type="number" size="20" required value={props.AnnInv} onChange={(e)=> props.OnChangeFunction('annInvestment',e.target.value)}/>
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Return Expected (%)</label>
                <input type="number" size="20" required value={props.RetInv} onChange={(e)=>props.OnChangeFunction('returnInv',e.target.value)}/>
            </p>
        </div>

         <div className="inputGroup">
            <p>
                <label> Year  Investment</label>
                <input type="number" size="20" required value={props.YearInv} onChange={(e)=> props.OnChangeFunction('yearInv',e.target.value)}/>
            </p>
        </div>
      
        <button id="resetButton" type="button" onClick={props.OnClick}>Reset</button>
    </section>
  )
}


