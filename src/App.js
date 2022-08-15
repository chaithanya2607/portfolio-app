import "./App.css";
import { Homepage } from "./Homepage";
import { Blog } from "./Blog";
import { Skills } from "./Skills";
import { Projectworks } from "./Projectworks";
import { Routes, Route } from "react-router-dom";
import { Pagenotfound } from "./Pagenotfound";
import { Contactme } from "./Contactme";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";


function App() {
  const navigate = useNavigate();
  const [show, setShow] = useState("light");
  const theme= createTheme({
    palette: {
      mode: show,
    },
  });
  return (
     <ThemeProvider theme={theme}>
      < CssBaseline/>
    <div>
      <AppBar position="static">
        <Toolbar>
        <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/vectors/logo-with-crown-crown-with-c-letter-luxury-concept-vector-id1317765386?k=20&m=1317765386&s=612x612&w=0&h=Z0Yh9ZetygFCasR3I8I2XL1rDCkssZDttI3kxZ2_pdY=" />
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/skills")}>
            Skills
          </Button>
          <Button color="inherit" onClick={() => navigate("/projectworks")}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => navigate("/blog")}>
            Blog
          </Button>
          <Button color="inherit" onClick={() => navigate("/contactme")}>
            Contact me
          </Button>
          <Button
          style={{marginLeft:600}}
            color="inherit"
            onClick={() => setShow(show==="light"?  "dark":"light")}
          >{show==="light"?  "dark":"light"} Mode 
            {show=== 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projectworks" element={<Projectworks />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}
export default App;
