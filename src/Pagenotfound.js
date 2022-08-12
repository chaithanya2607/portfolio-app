import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
export function Pagenotfound(){
    const navigate= useNavigate();
    return(
        <div>
            <Button style={{margin:5}}
            onClick={()=>navigate(-1)}
            variant="contained" component="label">BACK</Button><br></br>
            <img style={{width:1000}}  src="https://thumbs.dreamstime.com/b/error-page-thoughtful-panda-asks-philosophical-question-design-template-layered-file-clipping-mask-used-83565643.jpg" alt="404 Lost"></img>
            
        </div>
    );
}
