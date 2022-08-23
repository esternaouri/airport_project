import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Home= (props) => {
    

        return (

            
                <>
                  <nav>
                    <ul className='horizontal'>
                      <li>
                      <Link to="/">A.I.P</Link>

                      </li>
<br></br>
                      <li>
                      <Link to="/two">MTAR, TAF, NOTAM</Link>

                      </li>
                      <br></br>

                      <li>
                        <Link to="/three">FLIGHTS REGISTRATION</Link>
                      </li>
                      <br></br>

                    </ul>
                  </nav>
            
                  <Outlet />
                </>
              )
            };
            


            
 
 
export default Home;