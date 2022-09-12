
import React, {useEffect ,useState} from "react";


const Form = () => {

const [number, setNumber] = useState({one: '', two: ''})
const [suma, setSuma] = useState()

  
  useEffect(()=>{
    
 
    if(number.one >=0){
      if(number.two ==='Onzas'){
        
      
        const {one} = number
          setSuma((Number(one)*16).toFixed(2))
      
      }
      else if(number.two === 'Kilogramos'){
          const {one} = number
          setSuma((Number(one)/2.204662).toFixed(2))
      
      }
      else if(number.two === 'Gramos'){
          const {one} = number
          setSuma((Number(one)*453.59237).toFixed(2))
      }
      
    }
    else{
      setSuma('NO ingresar negativos') 
      setTimeout(function(){
       window.location.reload();
    }, 2000);
     
    }
   
    
  
  },[number])
    

  const handleInput = (event) => {
    const { name, value } = event.target
    setNumber({...number, [name]: value})
  }

  return (
    <div className="App  cont border border-primary">
    <div className="row">
    <div className="col-md-6">
    <label>Ingrese el valor en libras: </label><br/>
      <input className="input" onChange={handleInput} name="one" type="number" min={0} value={number.one} placeholder="Ingresa un numero"/>
      <br/>
      <br/>
      <label>El resultado es:</label><br/>
      <input value={suma} maxLength={8} readOnly="readonly"/>
      </div>
      
     <div className="col-md-6">
     <div class="row">
     <label class="col-md-7 ">Seleccione a que unidad desea convertirlo:  </label><br/>
     
     <select
          class=" form-control col-md-7 form-control"
          
          id="exampleFormControlSelect1"
          name="two"
          onChange={handleInput}
          value={number.two}
          
          >
          <option  name=""></option>
          <option  name="Kilogramos">Kilogramos</option>
          <option   name="Gramos">Gramos</option>
          <option   name="Onzas">Onzas</option>
        </select>     
     </div>
     </div>
      </div>
    </div>
  );
   
};
export default Form;
