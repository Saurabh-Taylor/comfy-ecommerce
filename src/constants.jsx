export const navLinks  = [
    {id:1 , url:"/" , text:"Home"},
    {id:2 , url:"about" , text:"About"},
    {id:3 , url:"products" , text:"products"},
    {id:4 , url:"cart" , text:"cart"},
    {id:5 , url:"checkout" , text:"checkout"},
    {id:6 , url:"orders" , text:"orders"},
]

export const formatPrice  = (price)=>{
    const dollarAmount = new Intl.NumberFormat('en-Us' , {
        style: 'currency' ,
        currency: 'INR'
    }).format((price/100).toFixed(2))
    return dollarAmount
}


export const generateAmountOptions = (number) => {
    return Array.from({ length: number }, (_, index) => {
      const amount = index + 1;
  
      return (
        <option key={amount} value={amount}>
          {amount}
        </option>
      );
    });
  };