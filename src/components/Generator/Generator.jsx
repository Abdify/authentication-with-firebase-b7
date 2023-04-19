import { useState } from "react";
import { Link } from "react-router-dom";
import Color from "./Color";
import "./Generator.css";

const Generator = () => {
  const [state, setState] = useState({
    colorsNum: 5,
    colors: [],
  });
  for (let i = 0; i < state.colorsNum; i += 1) {
    state.colors.push({ hexCode: generateColor() });
  }

  function generateColor() {
    return "#" + Math.random().toString(16).slice(-6);
  }

  function updateColor(index) {
    let colors = state.colors.slice();
    const currentColor = generateColor();
    colors[index].hexCode = currentColor;
    setState({
      colors: colors,
    });
  }

  const user = { email: "a" };
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div className="color-container">
      {state.colors.map((color, index) => (
        <Color
          key={`color-${index}`}
          index={index}
          update={updateColor}
          hexCode={color.hexCode}
        ></Color>
      ))}

      {user ? (
        <form action="">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="border border-black"
          ></textarea>
          <button>Add your comment</button>
        </form>
      ) : (
        <Link to="/login">Login first to add your comment</Link>
      )}
    </div>
  );
};

export default Generator;
