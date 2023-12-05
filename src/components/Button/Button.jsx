export const Button = ({ children, style, onClick }) => {
  return (
    <button
      className="btn"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}