import React from 'react';

const Three= (props) => {
    
        const [inputs, setInputs] = React.useState({});
        const [Allflights, setAllflights] = React.useState([]);

        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}))
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          setAllflights(Allflights => [...Allflights, inputs]);


        }
        //console.log(Allflights)

        return (
<div> 
<h1>Flight Planning Registration And Confirrmation</h1>

<h2>Flights Registration</h2>
    <form onSubmit={handleSubmit}>
      <label>Pilot Name and ID:
      <input 
        type="text" 
        name="pilotid" 
        value={inputs.pilotid || ""} 
        onChange={handleChange}
      />
      </label>
      <label> Aircraft ID:
        <input 
          type="number" 
          name="aircraftid" 
          value={inputs.aircraftid || ""} 
          onChange={handleChange}
        />
        </label>
        <label> Aircraft Type:
        <input 
          type="text" 
          name="Aircrafttype" 
          value={inputs.Aircrafttype || ""} 
          onChange={handleChange}/>
        </label>

        <label> Departure Local :
        <input 
          type="text" 
          name="departure" 
          value={inputs.departure || ""} 
          onChange={handleChange}/>
        </label>
    
        <label> Destination :
        <input 
          type="text" 
          name="destination" 
          value={inputs.destination || ""} 
          onChange={handleChange}/>
        </label>
 
        <label>Arival Time + Date :
        <input 
          type="text" 
          name="arivaltime" 
          value={inputs.arivaltime || ""} 
          onChange={handleChange}/>
        </label>
      <  label> Fuel (lb):
        <input 
          type="text" 
          name="fuel" 
          value={inputs.fuel || ""} 
          onChange={handleChange}/>
        </label>
        <  label> Flight duration(hr):
        <input 
          type="text" 
          name="flightduration" 
          value={inputs.flightduration || ""} 
          onChange={handleChange}/>
        </label>
        <input type="submit" />
    </form>
  <div>
<h2>Flights Confirmation</h2>
{Allflights.map((item) =>
    <ul><span>{item.pilotid}{" "}</span><span>{item.Aircrafttype}{" "}</span><span>{item.destination}{" "}</span><span>{item.arivaltime}{" "}</span></ul>
    )  }
  </div>
</div>
);
    
 }
 
export default Three;