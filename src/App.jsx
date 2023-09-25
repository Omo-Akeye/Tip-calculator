import { useState } from 'react'
import './index.css'

function App() {
  const [price,setPrice] = useState(0)
  const [percentage1,setPercentage1] =useState(0)
  const [percentage2,setPercentage2] =useState(0)

  const tip = price * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setPrice(0)
    setPercentage1(0)
    setPercentage2(0)
  }

  return (
   <>
   <Calcuator percentage1={percentage1} percentage2={percentage2} price={price} setPrice={setPrice} setPercentage1={setPercentage1} setPercentage2={setPercentage2} tip={tip} handleReset={handleReset}/>
   </>
  )
}

function Calcuator({percentage1,percentage2,price,setPrice,setPercentage1,setPercentage2,tip,handleReset}) {
  return(
    <div>
      <Bill price={price} setPrice={setPrice}/>
      <Service percentage={percentage1} setPercentage={setPercentage1}>How do you like the service?</Service>
      <Service percentage={percentage2} setPercentage={setPercentage2}>How did your friend like the service?</Service>
      {price> 0 && (
        <>
        <PayBill price={price} tip={tip}/>
        <Resetbutton handleReset={handleReset} /></>
      )}
    </div>
  )
}
function Bill({price,setPrice}) {
 
  return(
    <div>
      <label>How much was the bill?</label> <input type="text" value={price} onChange={(e)=>setPrice(Number(e.target.value))}/>
    </div>
  )
}
function Service({percentage,children,setPercentage}) {
  return(
    <div>
      <label>{children}</label> 
      <select value={percentage} onChange={(e)=>setPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was very good (10%)</option>
        <option value="20">Absolutely Amazing!(20%)</option>
      </select>
    </div>
  )
}
function PayBill({tip,price}) {
  return(
    <div>
      <p>You pay ${tip + price} (${price} + ${tip} tip)</p>
    </div>
  )
}
function Resetbutton({handleReset}) {
  return (
    <>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
