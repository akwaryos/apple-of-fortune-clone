import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Bid from './Components/Bid/Bid';
import Dataview from './Components/Dataview/Dataview';
import Profit from './Components/Profit/profit';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  'bootstrap';
import BiddingSpinner from './Components/BiddingSpinner/BiddingSpinner';
import apple from './assets/aog.png';
import banner from './assets/banner.jpg';

export function App() {
	if(!localStorage.getItem("money")){
		localStorage.setItem("money","0");
	}
	const [money, setMoney] = useState(localStorage.getItem("money"));
	// const money = localStorage.setItem("money",money.toString())
	const [bidAmount, setBidAmount] = useState(0);
	const [profit, setProfit] = useState(0)
	const [toggle, setToggle] = useState(false)
	const [profitToggle,setProfitToggle] = useState(false)

	useEffect(()=>{
		localStorage.setItem("money",money.toString())
		
	},[])

	const handleMoneyChange = (amount)=> {
		setMoney(amount)
		localStorage.setItem("money",amount.toString())
		
		console.log(localStorage.getItem("money"))
	}

	const handleToggle = ()=>{
		setToggle(!toggle)
	}


	const handleBidAmount = (amt)=>{
		setBidAmount(amt)
		const Remaining = parseFloat(money) - parseFloat(amt)
		
		setMoney(Remaining.toString())
		localStorage.setItem("money",money)
		// const remaining = localStorage.getItem("money")

	}

	const handleProfit = (amt)=>{
		setProfit(amt)
		// console.log(profit)
	}

	const handleProfitToggle = ()=>{
		setProfitToggle(true)
	}

	const handleTotal = () =>{
		setMoney((parseFloat (money) + parseFloat(profit)).toFixed(2))
		localStorage.setItem("money",((parseFloat(money) + parseFloat(profit)).toFixed(2)).toString())
		
		console.log(money)

	}

	return (
		<div class="">
			<img class="banner" src={banner}></img>
		{toggle?
		<div class="d-flex flex-column">
			<Dataview money = {money} handleMoneyChange= {handleMoneyChange}></Dataview>
				
			<Profit toggle = {profitToggle} profit = {profit} money = {money} handleProfit = {handleTotal}/>
			
			<BiddingSpinner handleProfitToggle = {handleProfitToggle} bidAmount={bidAmount} handleProfit={handleProfit}/> 
		
			</div>:
		<div class=" custom-bg-color  ">
			<Dataview money = {money} handleMoneyChange= {handleMoneyChange}></Dataview>
			
			 <h3 className="custom-banner">! جرب حظك! تذوق تفاح الثلج الأبيض</h3>
			<img className="rounded-4 mt-4 me-0 " width = "150px" src={apple} />
			<Bid handleBidAmount = {handleBidAmount} bidAmount = {bidAmount} handleMoneyChange= {handleMoneyChange} handleToggle={handleToggle} ></Bid>
			</div>}
		</div>
	);
}



render(<App />, document.getElementById('app'));
