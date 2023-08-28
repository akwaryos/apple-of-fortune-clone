import { useState } from 'preact/hooks';
import './Bid.css';
function Bid(props) {
    const [enteredMoney, setEnteredMoney] = useState(0);
    // const remaining = localStorage.getItem("money")
    const watchChange = (e) =>{
      setEnteredMoney(e.target.value)
      
    }
    // props.handleMoneyChange(money)  
    const handleSubmit = (e) =>{
      // localStorage.setItem("money",enteredMoney.toString())
      props.handleBidAmount(enteredMoney)

      e.preventDefault()
      props.handleToggle()

    }
  return (
    <div class="bid-wrapper d-flex flex-column fixed-bottom  w-100 ">
        <div className="row flex-row-reverse mb-4 justify-content-around">
        <button className=" btn  mt-0  rounded custombtn"> أدنى</button>
        <button className=" btn  mt-0  rounded custombtn "> X2</button>
        <button className=" btn  mt-0 rounded custombtn"> X/2</button>
        <button className=" btn  mt-0 rounded custombtn"> أقصى</button>
        </div>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
       	<input onChange={watchChange} min={0} max={localStorage.getItem("money")} className="  bid-amount mt-2" id="bid"  type="number" step="any" placeholder=" " required></input>
        <label class="bid-label" for ="bid" > إدخال مبلغ الرهان </label>
		    <button  className=" btn bid-btn mt-0 rounded ">وضع الرهان</button>
        </form>
    </div>
  )
}

export default Bid