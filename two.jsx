import React from 'react';
import WeatherAPI from './api';

const Two= (props) => {
    

        const accordionData = {
                content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                  laborum cupiditate possimus labore, hic temporibus velit dicta earum
                  suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                  voluptatem.`
              };
            
             const { title, content } = accordionData;
             const[isActive1, setActive1]=React.useState(false)
             const[isActive2, setActive2]=React.useState(false)
             const[isActive3, setActive3]=React.useState(false)
             const[isActive4, setActive4]=React.useState(false)

return (
<React.Fragment>
      <h1>TAF, METAR - Weather Forecast </h1>
      <div>
        <div>
          <div>
            <div onClick={()=>setActive1(!isActive1)}>LLHA METAR TAF<span >{isActive1? "-":"(+more)"}</span></div>
        
          </div>
         {isActive1&& <div >{ <WeatherAPI  city="haifa"></WeatherAPI>}</div>}
        </div>
      </div>
      <div>
        <div>
          <div>
            <div onClick={()=>setActive2(!isActive2)}>LLHZ METAR TAF<span >{isActive2? "-":"(+more)"}</span></div>
          </div>
         {isActive2&& <div >{ <WeatherAPI  city="Herzliya"></WeatherAPI>}</div>}
        </div>
      </div>
      <div>
        <div>
          <div>
            <div onClick={()=>setActive3(!isActive3)}>LLIB METAR TAF <span >{isActive3? "-":"(+more)"}</span></div>
          </div>
         {isActive3&& <div >{<WeatherAPI city="Tiberias"></WeatherAPI>}</div>}
        </div>
      </div>
      <div>
        <div>
          <div>
            <div onClick={()=>setActive4(!isActive4)}>LLBG METAR TAF<span >{isActive4? "-":"(+more)"}</span></div>
          </div>
         {isActive4&& <div >{<WeatherAPI city="tel-aviv"></WeatherAPI>}</div>}
        </div>
      </div>
    </React.Fragment>


            
        );
    
 }
 
export default Two;