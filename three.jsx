import React from 'react';

const Three= (props) => {
    
        const [inputs, setInputs] = React.useState({});
        const [Allflights, setAllflights] = React.useState([]);
        const [filterAllflights, setfilterAllflights] = React.useState([]);
        const [id, setId] = React.useState("");
        const[index,setIndex]=React.useState("");

        const[newDate,setnewDate]=React.useState("");

        const[newARC,setNewARC]=React.useState("");

        const[isActiveEdit,setIsactivEdit]=React.useState(false)
        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}))
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          setAllflights(Allflights => [...Allflights, inputs]);


        }
          const chnfil=(e)=>{
          setId(e.target.value)
          }
        const subfil=(e)=>{
          e.preventDefault();
          Allflights.filter((item)=>{if (item.pilotid==id) 
             setfilterAllflights(filterAllflights => [...filterAllflights, item]);
             if(id=="*"){
              setfilterAllflights(filterAllflights => [...filterAllflights, item])
             }
          })
        
        }
        const del =(i)=>{
          filterAllflights.splice(i,1)
          setfilterAllflights([...filterAllflights])
         
        }
        const edit=(e)=>{
          e.preventDefault();

          const obj={
          pilotid :filterAllflights[index].pilotid,
          pilotname:filterAllflights[index].pilotname,
          aircraftid:newARC,
          Aircrafttype:filterAllflights[index].destination,
          departure:filterAllflights[index].departure,
          destination: filterAllflights[index].destination,
          arivaltime:newDate,
          fuel:filterAllflights[index].fuel,
          flightduration:filterAllflights[index].flightduration,

        }

        if (index !== -1) {
          filterAllflights[index] = obj;

      }
              setfilterAllflights(filterAllflights=>[...filterAllflights])

        }
          
        const clr=()=>{
        setfilterAllflights([])
        //setAllflights([])

      }

     const iToChang=(e)=>{
      setIndex( e.target.value)
     }
const dToChang =(e)=>{
  setnewDate(e.target.value)
}
const eToChang =(e)=>{
  setNewARC(e.target.value)
} 
return (
<div> 
<h1>Flight Planning Registration And Confirrmation</h1>

<h2>Flights Registration</h2>
    <form onSubmit={handleSubmit}>
    <label> Pilot ID:
      <input 
        type="text" 
        name="pilotid" 
        value={inputs.pilotid || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Pilot Name:
      <input 
        type="text" 
        name="pilotname" 
        value={inputs.pilotname || ""} 
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
<form ON onSubmit={subfil}>
<label>Filtre by Pilot Id</label>
        <input 
          type="text" 
          name="filter"  
           onChange={chnfil}/>
            <input type="submit" />
            </form>
            <div className='form'>

     <div>
    {filterAllflights.map((item,index) =>
    <ul><span>{"index: "+index+": "}{item.pilotid}{" "}</span><span>{item.Aircrafttype}{" "}</span>
    <span>{item.destination}{" "}</span>
    <span>{item.arivaltime}{" "}</span><button onClick={()=>del(index)}>🛢️</button> <button onClick={()=>setIsactivEdit(!isActiveEdit)} >✏️</button></ul>
      )  } 
      </div>
 
<div className='form'>
{isActiveEdit&&<form  onSubmit={edit}>
  <label> new Aircraft ID:
        <input 
          type="number" 
          onChange={eToChang}

/> 
  </label>
  <label> :new Date
        <input 
          type="text" 
          onChange={dToChang}
           
        />  
        </label>
        <label> :index
        <input 
          type="text"
          onChange={iToChang}
        />  
        </label>
        <input type="submit" />

  </form>
  } </div>
  
  </div></div>
  
      <button on onClick={clr}>clr</button>

</div>
);
    
 }
 
export default Three;