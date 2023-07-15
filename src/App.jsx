import Logo from "/images/logowhite.png";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import "./App.css";
import Main from "./components/Main/Main.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/footer/footer.jsx";
function App() {
  return (
    <>
      <div className="banner">
        <div className="headerContainer">
          <div>
            <img src={Logo} className="logo" alt="hemp-logo" />
          </div>
          <div className="navbar">
            <ul>
              <li>SHOP</li>
              <li>CONSULTATION</li>
              <li>RESOURCES</li>
              <li>MEMBERSHIP</li>
              <li>ABOUT</li>
              <li>
                <AiOutlineSearch />
              </li>
              <li>
                <AiOutlineUser />
              </li>
              <li>
                <IoBagOutline />
              </li>
            </ul>
          </div>
        </div>
        <div className="horizontal-line">
          <hr />
        </div>
        <div className="content">Glossary</div>
      </div>

      <Main />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
