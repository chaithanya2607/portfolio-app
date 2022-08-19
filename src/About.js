import "./About.css"
import Button from "@mui/material/Button";
export function About(){
    return(
        <div  id='home'>
            <img className='cimage'
            src="https://www.kindpng.com/picc/m/110-1104699_woman-clipart-images-png-cartoon-business-woman-transparent.png"
            alt="Chaithanya Rao R"></img>
            <h1 id="h1"><b>CHAITHANYA RAO R</b></h1>
            <h2 id="h2">As a passionate artist, I work hard to produce magnificent illustrations, 
                paintings, and websites that enthral viewers. I am quick with numbers, 
                skilled at critical thinking, and have a very creative mind and vivid imagination. 
                I took a break after engineering, which gave me a clear grasp of my abilities, passions, 
                and the best course of action. As a perfectionist, I will always give 
                it my all in any role and <b>Full stack development</b>, I believe is best fit for me.</h2>
                 
      <Button style={{backgroundColor:"#AA336A"}}variant="contained">
  Resume
</Button>
                <ul>
                    <li>
                   <Button id="blogbutton"> <a  href="https://medium.com/@rchaithanyaraot/animating-your-websites-with-animate-css-8d7ee83eb4c5" target="_blank">BLOG-1</a></Button>
                    </li><br></br>
                    <li>
                    <Button id="blogbutton"><a  href="https://medium.com/@rchaithanyaraot/the-4-paths-of-yoga-ac18f39f31b3">BLOG-2</a></Button>
                    </li>
                </ul>
            
    
        </div>
    )
}