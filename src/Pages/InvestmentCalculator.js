

export function CalculateInvestmentResults({begInvestment, annInvestment, returnInv,yearInv}){

const annualData=[];

let investmentValue = begInvestment;

for(let i = 0; i < yearInv; i++){

    const interestEarnedInYear= investmentValue * (returnInv/100);

    investmentValue += interestEarnedInYear + annInvestment;

    annualData.push({
        year: i + 1, //year identifier
        interest: interestEarnedInYear, //the amount of interest earned in this year
        valueEndOfYear: investmentValue, //investment value at end of year
        annualInvest: annInvestment, //investment added in this year

    });

}

  return annualData;
}




