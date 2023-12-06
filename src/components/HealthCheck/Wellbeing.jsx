import { useDispatch, useSelector } from "react-redux";
import { showContinueBtn, handleClickContinueBtn } from "../../reducers/mentalHealthCheck/mentalHealthCheckSlice";
import { Slider } from "../Slider/Slider";
import { Button } from "../Button/Button";

export const Wellbeing = () => {
  
  const { isRangeChanged } = useSelector((store) => store.mentalCheck)
  const dispatch = useDispatch();
  
  return(
    <div className="wellbeing-wrapper">
      <h1>How are you feeling today?</h1>
      <Slider
        onChange={() => dispatch(showContinueBtn())}
       
      />
      {
        isRangeChanged &&
        
        <Button 
          onClick={() => dispatch(handleClickContinueBtn())}
          value="Continue"
          aria-label="Continue"
        />
      }
    </div>
  )
} 