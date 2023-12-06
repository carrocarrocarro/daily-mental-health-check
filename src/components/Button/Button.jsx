export const Button = ({ value, style, onClick }) => {
  return (
    <button
      className="btn"
      style={style}
      onClick={onClick}
      value={value}
    >
      {value}
    </button>
  )
}