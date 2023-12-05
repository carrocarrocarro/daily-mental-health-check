import { Slider } from "../../Slider/Slider";
import { Button } from "../../Button/Button";

export const MentalHealthCheck = () => {
  
  const handleClick = () => {
    
  };

  return(
    <div className="mentalHealthCheck-wrapper">
      <h1>How are you feeling today?</h1>
      <Slider />
      <Button />
    </div>
  );
};