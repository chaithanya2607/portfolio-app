import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './contact.css'
import Toolbar from "@mui/material/Toolbar";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export function Contactme(){
    const Navigate = useNavigate();
    return(
        <div id="ctm`">
           <h1 id="contact">Contact me</h1>
         
        <form className='textfield'>
                <TextField style={{width:"500px",backgrounColor:"white"}} id="filled-basic" label="Enter your name" variant="filled" /><br></br>
                <TextField style={{width:"500px"}} id="filled-basic" label="Enter your email" variant="filled" /> <br></br>
                <TextField style={{width:"500px"}} id="filled-basic" label="Phone number" variant="filled" /><br></br>
                <TextField style={{width:"500px"}} id="filled-basic" label="Description" variant="filled" /><br></br><br></br>
                <Button style={{width:500,backgroundColor:"#AA336A"}}
                onClick={()=>Navigate("/contactme")}
                variant="contained" color="primary" id="sub">Submit</Button>
            </form><br></br><br></br>
            <div >
            <Toolbar id="toolbar">
          <Button 
         id="wel" color="inherit"><a href="https://github.com/chaithanya2607" target="_blank">
        <GitHubIcon id="button1" /></a>
          </Button>
          <Button  id="wel" color="inherit" ><a href="https://www.linkedin.com/in/chaithanya-r-b9b74712a/" target="_blank">
           <LinkedInIcon id="button1"/></a>
          </Button>
          
        </Toolbar>
        </div>
  </div>
    );
}
