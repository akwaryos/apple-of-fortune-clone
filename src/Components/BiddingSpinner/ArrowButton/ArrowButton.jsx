import {useState,useEffect} from 'preact/hooks';
import './ArrowButton.css';
import arrowImg from '../../../assets/arrow-button.png';
import appleButton from '../../../assets/applebutton.jpg';
function ArrowButton({isActvated, handleClick}) {

        const [isClicked, setIsClicked] = useState(false)
        const click = ()=>{
            handleClick()
            setIsClicked(true)
        }
    
        if (isClicked){
            return(
                <div className="arrow ">
                
                <button style={{backgroundImage:`url(${appleButton})`}} onClick={click} class="arrow-button" disabled></button>
            
            
            </div>
        
            )
        }else{
        if (isActvated){
            return (
                <div className="arrow ">
                    
                    <button style={{backgroundImage:`url(${arrowImg})`}} onClick={click} class="arrow-button"></button>
                
                
                </div>
            
              )
        }
           else{
           
   
            return (
                <div className="arrow "><button class="arrow-button"></button></div>
            
              )
        }

    

 
}
}
export default ArrowButton;