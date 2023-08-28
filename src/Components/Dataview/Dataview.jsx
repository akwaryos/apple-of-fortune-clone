import { useRef, useState,useEffect } from 'preact/compat';
import wallet from '../../assets/wallet.png';
import './Dataview.css';


function Dataview(props) {
  const inputRef = useRef(null)
  const [dynamicWidth, setDynamicWidth] = useState(props.money.length *15)
  const [money, setMoney] = useState(props.money)

  useEffect(()=>{
    setDynamicWidth(props.money.length *15 )
    setMoney(props.money)

  },[props.money])

  const handleChange = (e) =>{
    if (e.target.value){
      props.handleMoneyChange(parseFloat(e.target.value))
      setDynamicWidth(e.target.value.toString().length *15 )
    }else{
      setDynamicWidth(30)
      props.handleMoneyChange(0)
    }
  }
  return (
    <div class=" d-flex money-container     rounded- mt-2 me-0 ">
        <img class="wallet"  src={wallet} width="55px"></img>
    <div class="  money text-center    rounded-pill   " >
     
         <span>   ج.م  </span>
         <input type="text" min="0" pattern="^[1-9]\d*(?[\.]\d{3})?$" lang="en" value={props.money }  style={{ width: dynamicWidth, maxWidth:dynamicWidth }} onChange={handleChange}   class="total-input"/>  </div> 
    
     </div>
  )
}

export default Dataview