

export const currencyFormatter = (currency) => {
  return new Intl.NumberFormat("en-GB",{style:"currency", currency: currency, minimumFractionDigits:0, maximumFractionDigits:0});

}


