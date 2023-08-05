
import { useRef, useState } from 'react'
import './style.css'



const Bhie = () => {

const input=useRef();
const [By,setBy]=useState("");
const [By1,setBy1]=useState([]);
const [need,setNeed] = useState("");


const [textToCopy, setTextToCopy] = useState('');
  
  const handleCopyClick = () => {
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          console.log('Text copied to clipboard:', textToCopy);
          alert('copy success LOL')
        })
        .catch(error => {
          console.error('Error copying text:', error);
        });
    }
  };

 


let CLICK = () =>{
       let value = input.current.value;
       setBy(value);
       setTextToCopy(value);

}

let TOTS = (e) =>{
e.preventDefault();

    if(By){
      setBy("")
      setBy1([...By1,By]);
     
    }else{
    setNeed("Need To enter a text Beshy")
    }

}

  return (
<>

    <div className='Parent'>
<div className='Child'>
    <h1>Beshy APP</h1>
    <div>
        {need ? <p style={{color:"red"}}>{need}</p> : ""}
    </div>
    <div className="mb-3">
        <input type="text" placeholder='Bakit Malungkot beshy?'  className="form-control" id="size" onChange={CLICK}  ref={input}/>
    </div>

    <div>
        <button className="btn btn-primary" onClick={TOTS} >Genarate</button>
    </div>

  <div className='TEXT'>
    {By1.map((inso,index) => <h5  style={{color:"white"}}key={index}>{`🤸‍♂️${inso}🤸‍♂️`}</h5>)}
  
  </div>
<span><button  className="btn btn-success" onClick={handleCopyClick}>Copy</button></span>

</div>
    </div>

</>
  )
}

export default Bhie