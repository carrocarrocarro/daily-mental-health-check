import { useDispatch, useSelector } from "react-redux";
import { Nav } from "../Nav/Nav";
import { toggleNav } from "../../reducers/nav/navSlice";
import "../../style/components/navBar/navBar.scss"

export const NavBar = () => {
  const { isOpen } = useSelector((store) => store.nav);
  const dispatch = useDispatch();
  
  return(
    <div className="navBar">
      {isOpen && <Nav />}
      <h2>Navbar</h2>
      <button 
        className="navBtn"
        onClick={() => dispatch(toggleNav())}
      >
        Toggle Nav
      </button>
    </div>
  );
};