import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Home= (props) => {
    

        return (

            
                <>
                  <nav>
                    <ul className='horizontal'>
                      <button>
                      <Link to="/">111111</Link>

                      </button>

                      <button>
                      <Link to="/two">222222</Link>

                      </button>
                      <button>
                        <Link to="/three">3333</Link>
                      </button>
                    </ul>
                  </nav>
            
                  <Outlet />
                </>
              )
            };
            


            
 
 
export default Home;