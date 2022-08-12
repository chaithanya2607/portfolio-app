import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './contact.css'
import Toolbar from "@mui/material/Toolbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Routes, Route } from "react-router-dom";


export function Contactme(){
    const Navigate = useNavigate();
    return(
        <div>
           <h1 id="contact">Contact me</h1>
            <div className='textfield'>
            
                <TextField style={{width:500}} id="filled-basic" label="Enter your name" variant="filled" /><br></br><br></br>
                <TextField style={{width:500}} id="filled-basic" label="Enter your email" variant="filled" /> <br></br><br></br>
                <TextField style={{width:500}} id="filled-basic" label="Phone number" variant="filled" /><br></br><br></br>
                <TextField style={{width:500}} id="filled-basic" label="Description" variant="filled" /><br></br><br></br>
                <Button style={{width:500}}
                onClick={()=>Navigate("/")}
                variant="contained" color="success" id="sub">Submit</Button>
            </div><br></br>
        <Toolbar id="toolbar">
          <Button id="button1" color="info" >
          <FacebookIcon/>
          </Button>
          <Button id="button1" color="inherit">
        <GitHubIcon />
          </Button>
          <Button id="button1" color="primary" >
           <LinkedInIcon/>
          </Button>
          <Button id="button1" color="secondary" >
            <InstagramIcon id="i1"/>
          </Button>
          <Button id="button1" color="warning">
            <EmailIcon/>
          </Button>
        </Toolbar>
       
        </div>
    );
}