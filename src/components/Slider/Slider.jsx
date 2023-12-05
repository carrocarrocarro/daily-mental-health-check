export const Slider = () => {
  return(

    <div className="slider-wrapper">
      <input 
        type="range" 
        min="0" 
        max="100" className="healthSlider" 
      />
    </div>    

  );
};