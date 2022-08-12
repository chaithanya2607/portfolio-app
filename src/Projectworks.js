import "./project.css";
import Button from '@mui/material/Button';

export function Projectworks(){
    return(
        <div>
            <h1 id="projhead">Work/Projects</h1>
            <div className="works">
            <Workcard workname="project1" description="des1" image="https://i0.wp.com/sociallover.net/wp-content/uploads/2019/11/welcome-images.png"/>
            <Workcard workname="project2" description="des2" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSaTrWf942mQxxW32cSQF8O2np9tCeQJ0dSqNXTqmuBiy4FEW1JcwlAXkhUslAY8yOXn8&usqp=CAU"/>
            <Workcard workname="project3" description="des3" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiR-ecZw4pAPb4AI58wewbGSxERo3_9es8nHAC3bqXbPIcgeIoXFnYp2Ty2MXBtxOWZBU&usqp=CAU"/>
            <Workcard workname="project4" description="des4" image="https://image.shutterstock.com/shutterstock/photos/457929637/display_1500/stock-photo-word-welcome-handwritten-on-sandy-beach-with-soft-wave-of-blue-ocean-on-background-457929637.jpg"/>
            </div>
        </div>
    );
}
function Workcard(proj){
    return(
        <div id="workproj">
            <img id="welcome"  src={proj.image} alt={proj.workname}></img><br></br>
            <p>{proj.workname}</p>
            <p>{proj.description}</p>
            <Button color="secondary" style={{width:220}}  variant="contained">Open</Button>
        </div>
    )
}