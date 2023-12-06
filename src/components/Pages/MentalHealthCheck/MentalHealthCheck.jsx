import { useDispatch, useSelector } from "react-redux";
//import { showContinueBtn, handleClickContinueBtn } from "../../../reducers/mentalHealthCheck/mentalHealthCheckSlice";
//import { Slider } from "../../Slider/Slider";
//import { Button } from "../../Button/Button";
import { showContinueBtn, handleView } from "../../../reducers/mentalHealthCheck/mentalHealthCheckSlice";
import { Wellbeing } from "../../HealthCheck/Wellbeing"
import { ResultWellbeing } from "../../HealthCheck/ResultWellbeing";

export const MentalHealthCheck = () => {
  
  const { isShown } = useSelector((store) => store.mentalCheck)
  const dispatch = useDispatch();
  

  return(
    
    <>
      {
      <Wellbeing />
      }
      {
        <ResultWellbeing />
      }
    </>
  );
};