import { useState, useEffect,useRef } from 'preact/hooks';
import Profit from '../Profit/profit';
import './BiddingSpinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ArrowButton from './ArrowButton/ArrowButton';




function BiddingSpinner(props) {
 
    const [multipliers, setMultipliers] = useState( 
    [
      {
        current: false,
        multiplier : 349.68
      },
      {
        current: false,
        multiplier : 69.93
      },
      {
        current: false,
        multiplier : 27.97
      },
      {
        current: false,
        multiplier : 11.18
      },
      {
        current: false,
        multiplier : 6.71
      },
      {
        current: false,
        multiplier : 4.02
      },
      {
        current: false,
        multiplier : 2.41
      },
      {
        current: false,
        multiplier : 1.93
      },
      {
        current: false,
        multiplier : 1.54
      },
      {
        current: true,
        multiplier : 1.23
      }
    


    ])

    const [clicked,setClicked] = useState(false)
    const biddingCardRef = useRef(null)
    const cardRef = useRef(null)
    const [maskCounter,setMaskCounter] = useState(0.1) 
    const [maskValue, setMaskValue] = useState(`linear-gradient(to top,
      rgba(0,0,0, 1) 0,   rgba(0,0,0, 1) 50%, 
      rgba(0,0,0, 0.1) 90%, rgba(0,0,0, 0.1) 0) 100% 50% / 100% 100% repeat-x;`); // Initial mask value
    const [scrollValue, setScrollValue] = useState(260)
    const scrollToTop = () => {
      if (cardRef.current) {
        cardRef.current.scrollTo({
          top: scrollValue,
          behavior: 'smooth'
        });
      }
    };


    const handleMaskChange = () => {
      // Toggle the mask value between 'none' and 'url(#maskId)' (or any other value)
      if (maskCounter < 1){
        setMaskCounter(maskCounter + 0.2) 
      }
      const newMaskValue = `linear-gradient(to top, 
        rgba(0,0,0, 1) 0,   rgba(0,0,0, 1) 50%, 
        rgba(0,0,0, ${maskCounter}) 90%, rgba(0,0,0, ${maskCounter}) 0
    ) 100% 50% / 100% 100% repeat-x`
      setMaskValue(newMaskValue);
    };
    useEffect(()=>{
     scrollToTop()

    },[scrollValue])

    const switchMultiplier = (currentIndex) => {
      const updatedMultipliers = [...multipliers];
      const currentMultiplierIndex = updatedMultipliers.findIndex((item) => item.current);
      
      if (currentMultiplierIndex >= 0) {
        updatedMultipliers[currentMultiplierIndex].current = false;
      }
      if((currentIndex >=0)){

        updatedMultipliers[currentIndex].current = true;
      }
      setMultipliers(updatedMultipliers);
    };
    
    const handleClick = () =>{
      const currentMultiplierIndex = multipliers.findIndex((item) => item.current);
      console.log(currentMultiplierIndex)
      if(currentMultiplierIndex < 7){
        handleMaskChange()
      }

      if (currentMultiplierIndex ==0){
        props.handleProfitToggle()
      }
      props.handleProfit(parseFloat(multipliers[currentMultiplierIndex].multiplier*props.bidAmount).toFixed(2))
      const nextMultiplierIndex = (currentMultiplierIndex - 1) % multipliers.length;
  
      switchMultiplier(nextMultiplierIndex);
      setClicked(!clicked)
      // cardRef.current.scrollTop = scrollValue
      if (window.innerHeight > 650){
      setScrollValue(scrollValue -  100)
      }else{
        setScrollValue(scrollValue -  60)
      }
    }
  return (
		<div class="d-flex justify-content-end">

    <div  ref = {biddingCardRef} style={{"--mask":maskValue}}  class="bidding-card  me-2  mt-0">
  <div class="card-body w-100 ">
   

    <div ref={cardRef}  class="   custom-table w-100 ">

  {/* <tbody> */}
    {multipliers.map((multi,i)=>{
       return(
       <div key={i}  className=" button-container d-flex flex-row align-content-around justify-content-start m-auto">
       <div  class="multiplier-container  "><div class=" multiplier">x {multi.multiplier}</div></div>
       
       <div   class="apples-column-container me-2">
        <ArrowButton isActvated={multi.current} handleClick={handleClick}/>
        <ArrowButton isActvated={multi.current} handleClick={handleClick}/>
        <ArrowButton isActvated={multi.current} handleClick={handleClick}/>
        <ArrowButton isActvated={multi.current} handleClick={handleClick}/>
        <ArrowButton isActvated={multi.current}  handleClick={handleClick} />
      </div>
     </div>
       )  
    })}
   


  </div>
</div>
</div>
</div>
  )
}

export default BiddingSpinner