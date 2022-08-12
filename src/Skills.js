import './skill.css'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
export function Skills(){
    return(
        <div className='skillset'>
            <h1>SKILLS<span>   </span><AutoFixHighIcon/></h1>
            <div className='skillcards'>
            <Skillcard skillname="HTML" icon="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"/>
            <Skillcard skillname="CSS" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlEA6Vsz0fqBzwPvPnhncrBwAXizgKMXqSNQmLLctUOtagnhT9U2b9zWAAvFBo4jfAYA&usqp=CAU"/>
            <Skillcard skillname="JavaScript"icon="https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg"/>
            <Skillcard skillname="BootStrap"icon="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"/>
            <Skillcard skillname="Reactjs"icon="https://flyclipart.com/thumb2/react-logo-png-transparent-vector-221723.png"/>
            <Skillcard skillname="Nodejs"icon="https://nodejs.org/static/images/logo-hexagon-card.png"/>
            <Skillcard skillname="MongoDB"icon="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"/>
            <Skillcard skillname="MySQL"icon="https://i.pinimg.com/originals/09/7b/34/097b349ab1d78c15744c3a89ff457939.png"/>
        </div>
        </div>
    )
}
function Skillcard(ski){
    return(
        <div id="box">
        <h3>{ski.skillname}</h3>
        <img className='skillimage'  style={{width:100}}  src={ski.icon} alt={ski.skillname}></img>
        </div>
    );
}