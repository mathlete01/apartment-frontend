// import Jumbotron from "react-bootstrap/Jumbotron";
import { Jumbotron } from "reactstrap";


const Header = () => {
  return (
  <Jumbotron className="headerClass" >
    <h1>Apartment Browser</h1>
      Compare listings <b>in the same neighborhood at different price points</b>.
      <br></br>Compare listings <b>at the same price point across different neighborhoods</b> 
  </Jumbotron>
  )
};

export default Header;
