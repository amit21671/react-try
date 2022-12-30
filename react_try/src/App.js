import {is,reducer} from './Reducer';
import {useReducer,useState} from 'react';

const App=()=>{ 

  const[data,setData]=useState({name:"",age:"",email:""});

  const handleChange=(evt)=>{
      setData({...data,[evt.target.name]:evt.target.value});
  }
  const handleSave=()=>{
      //console.log(data);
      dispatch({type:"ADD",payload:data});
  }
  const[state,dispatch]=useReducer(reducer,is);
  //console.log(state.records);   
    

    return(
      <>
            <h2>Add</h2>
            Name : <input name="name" type="text" value={data.name} onChange={handleChange}  /><br />
            Age : <input name="age" type="number" value={data.age} onChange={handleChange} /> <br />
            Email : <input name="email" type="email" value={data.email} onChange={handleChange} /> <br />
            <input type="button" value="Save" onClick={handleSave} /> 
            <h2>Show</h2>
      {
          state.records.map((row,i)=>{return(
              <div key={i} className="box">
                  <h2>{row.name}</h2>
                  <p>
                      {row.age} <br />
                      {row.email}
                  </p>
                  <p>
                      <input type="button" value="X" onClick={()=>dispatch({type:"DEL",payload:i})} />
                  </p>
              </div>
          )})
      }
      </>

    );
}
export default App;