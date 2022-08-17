import "./project.css";
import Button from '@mui/material/Button';

export function Projectworks(){
    return(
        <div>
            <h1 id="projhead">PROJECTS</h1>
            <div className="works">
            <Workcard workname="PROJECT-1" description="DESCRIPTION-1" image="https://media.istockphoto.com/photos/business-technology-internet-and-network-concept-technical-support-picture-id1202843504?k=20&m=1202843504&s=612x612&w=0&h=hoERVHS0pQXj0RIyTxctz-V60xkzNcYSwEfXIjevM-I="/>
            <Workcard workname="PROJECT-2" description="DESCRIPTION-2" image="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507__340.jpg"/>
            <Workcard workname="PROJECT-3" description="DESCRIPTION-3" image="https://previews.123rf.com/images/phongphan/phongphan1702/phongphan170200089/72549441-business-man-on-digital-stock-market-financial-indicator-background-digital-business-and-stock-marke.jpg"/>
            <Workcard workname="PROJECT-4" description="DESCRIPTION-4" image="https://media.istockphoto.com/photos/communication-network-concept-digital-transformation-picture-id1277730063?b=1&k=20&m=1277730063&s=612x612&w=0&h=dHeCTmRIOCPDwVHvb7vfYYwtVBO5qZsyHs635SldVPs="/>
            </div>
        </div>
    );
}
function Workcard(proj){
    return(
        <div id="workproj">
            <img id="welcome"  src={proj.image} alt={proj.workname}></img>
            <p>{proj.workname}</p>
            <p>{proj.description}</p>
            <Button id="projbutton" color="primary" style={{width:"220px",borderRadius:"5%"}}  variant="contained">Open</Button>
        </div>
    )
}