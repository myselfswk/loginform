import './App.css';
import Avatar from "./Components/Images/avatar.svg";
import backGround from "./Components/Images/bg.svg";
import Wave from "./Components/Images/wave.png";

function App() {

  return (
    <div>
      <img className="wave" src={Wave} alt="Wave" />
      <div className="container">
        <div className="img">
          <img src={backGround} alt="Background" />
        </div>
        <div className="login-content">
          <form action="./index.html">
            <img src={Avatar} alt="Avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <h5>-:Username:-</h5>
                <input type="text" className="inputs" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <h5>-:Password:-</h5>
                <input type="password" className="inputs" />
              </div>
            </div>
            {/* <a href="#">Forgot Password?</a> */}
            <input type="submit" className="btn" defaultValue="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
