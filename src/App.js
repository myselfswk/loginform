import './App.css';
import Avatar from "./Components/Images/avatar.svg";
import backGround from "./Components/Images/bg.svg";
import Wave from "./Components/Images/wave.png";

function App() {
  const inputs = document.querySelectorAll(".input");

  function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }


  inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });
  return (
    <div>
      <img className="wave" src={Wave} alt="Wave" />
      <div className="container">
        <div className="img">
          <img src={backGround} alt="Background" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src={Avatar} alt="Avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" defaultValue="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
