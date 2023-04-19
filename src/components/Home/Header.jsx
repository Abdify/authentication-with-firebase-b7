import { Link } from "react-router-dom";
import demo2 from "../../assets/images/demo2.PNG";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <p>
          Your Next Project Won&apos;t Be <span>HORRIBLE 😫</span>
        </p>
        <Link to="/generator">
          <button>Try it now!</button>
        </Link>
      </div>
      <div className="header-img glowing">
        <img src={demo2} alt="" />
      </div>
    </div>
  );
};

export default Header;
