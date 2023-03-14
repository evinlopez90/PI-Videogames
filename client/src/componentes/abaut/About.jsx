import React from "react";
import NavBar from "../NavBar/NavBar";
import "./About.css";
function About() {
  return (
    <>
      <NavBar />
      <div className="containerA">
        <div className="caja1A">
          <h1>Technologies</h1>
          <div>
            <img src="https://i.pinimg.com/564x/e4/92/e5/e492e5c18a7f6d7aa650b36438b75860.jpg" alt="" />
            <img src="https://i.pinimg.com/564x/89/73/86/897386f4a2ad8db32f4837940494b236.jpg" alt="" />
            <img src="https://i.pinimg.com/564x/a4/c7/e3/a4c7e3c4850185be77660d4d5c8a08a0.jpg" alt="" />
            <img src="https://i.pinimg.com/564x/5d/09/32/5d0932d4dd17c926806635893260205e.jpg" alt="" />
            <img src="https://ludovicwyffels.dev/static/335caa592debcad471a1ec9936833b1b/5707d/sequelize.png" alt="" />
          </div>
        </div>

        <div className="caja2A">
          <div className="divsA">
          <h1 className="h12A">Project</h1>
            <h1 className="h11A">individual</h1> 
          </div>

          <div className="divsA">
          

            <p>
            This is an individual project by Evin Lopez for the SoyHenry programming bootcamp.  
            
            The idea of this project is to build a web application from the {<a href='https://rawg.io/apidocs'>RAWG</a>} API in which you can:
Search for video games, view video game information, filter them, order them, create new video games.
					
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default About;
