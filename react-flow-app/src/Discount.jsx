import { useState } from "react" ;


function Discount(){
const [price,setPrice] = useState(1000);
const [discount,setDiscount] = useState(0);
const applyDiscount = (discountValue)=>
{
    if(discountValue===10)
    {
        setDiscount(10)
        setPrice(price*0.1);
    }
    else
    {
        setDiscount(0);
        setPrice(1000);
    }
}

return(
    <>
    <h2>Ori..price...........:$1000</h2>
    <h3>Dicount price: ${price.toFixed(2)}</h3>
    <p>click a button to apply a dicount.........</p>
    <button onClick={()=>applyDiscount(10)}>Apply 10% discount</button>
    <button onClick={()=>applyDiscount(0)}>Reset</button>
    </>
);

}
export default Discount;