export const Slider = ({onChange, value}) => {
  return(

    <div className="slider-wrapper">
      <input 
        type="range" 
        min="0" 
        max="100" className="healthSlider"
        onChange={onChange}
        value={value} 
      />
      <div>{value}</div>
    </div>    

  );
};