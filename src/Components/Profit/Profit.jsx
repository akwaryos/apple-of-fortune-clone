import {useEffect,useState} from 'preact/hooks'
import './Profit.css';

function Profit(props) {

    const [profit, setProfit ] = useState(props.profit)
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
       
        setToggle(true)
    }
    useEffect(()=>{
        setProfit(props.profit)
    },[props.profit])
  return (
      // <div class=" justify-content-center d-flex flex-column-reverse w-100">
    <>
     {toggle || props.toggle ? <div class="custom-modal ">
     <div class="custom-modal-content d-flex flex-column rounded-2">
        <h5 class="heading text-primary mb-2">فوز</h5>
        <h6 class=" win-text mb-4">لقد فزت: {profit} ج.م</h6>
<button onClick={()=>{ props.handleProfit(); window.location.reload();}} class="custom-win-btn btn  btn-light bg-light">حسناً</button>
</div>

 
</div>:null}
        <div class=" profit-wrapper d-flex flex-column justify-content-end align-items-center fixed-bottom  ">
     {profit&&!(toggle||props.toggle) ? <>
        <h6 class=" p-2 mt-4  profit-calc ">{profit} : الأرباح الحالية</h6> 
     
        <button onClick={handleToggle} class="btn  mb-2  profit-button">خذ الأرباح</button>
        </>:null}
        </div>
    </>
     
    // </div>
  )
}

export default Profit