import './skill.css'

export function Skills(){
    return(
        <div className='skillset'>
            <h1 id='skillh1'>SKILLS</h1>
            <div className='skillcards'>
            <Skillcard skillname="HTML" icon="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"/>
            <Skillcard skillname="CSS" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"/>
            <Skillcard skillname="JavaScript"icon="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"/>
            <Skillcard skillname="BootStrap"icon="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"/>
            <Skillcard skillname="Reactjs"icon="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"/>
            <Skillcard skillname="Nodejs"icon="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"/>
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
        <img className='skillimage' src={ski.icon} alt={ski.skillname}></img>
        </div>
    );
}