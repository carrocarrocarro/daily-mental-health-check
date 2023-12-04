import { Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { MentalHealthCheck } from "./Pages/MentalHealthCheck/MentalHealthCheck";
import { Quote } from "./Pages/Quote/Quote";

const routes = (
  <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/mental-check" element={<MentalHealthCheck />}></Route>
    <Route path="/motivate-me" element={<Quote />}></Route>
  </>
);

export default routes;