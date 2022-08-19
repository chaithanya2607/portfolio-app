import "./App.css";
import { Homepage } from "./Homepage";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projectworks } from "./Projectworks";
import { Routes, Route } from "react-router-dom";
import { Pagenotfound } from "./Pagenotfound";
import { Contactme } from "./Contactme";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

function App() {
  const navigate = useNavigate();
  return (
    <div className="mainpage">
      <AppBar position="static" style={{backgroundColor:"#AA336A",height:"70px"}}>
        <Toolbar>
        <Avatar alt="Chaithanya" src="C:\Users\rchai\OneDrive\Desktop\react\portfolio-app\src\IMG_20191209_022434_834.jpg" />
          <Button id="navbutton"  color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button id="navbutton" color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          <Button id="navbutton"  color="inherit" onClick={() => navigate("/skills")}>
            Skills
          </Button>
          <Button id="navbutton"  color="inherit" onClick={() => navigate("/projectworks")}>
            Projects
          </Button>
          <Button id="navbutton" color="inherit" onClick={() => navigate("/contactme")}>
            Contact me
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projectworks" element={<Projectworks />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>

  );
}
export default App;
