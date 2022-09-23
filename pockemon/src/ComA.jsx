import React ,{useState ,useEffect} from 'react'
import axios from 'axios';
export default function ComA() {
    const [num, setNum] = useState(1);
        useEffect(() => {
        async function gtData(){
            const res = await axios.get(`https://pokemon.co/api/v2/pokemon/${num}`);
            console.log(res);
        }
        gtData();
        })
        
  return (
    <>
          <h1> you choose {num}</h1>

          <select value={num} onChange = { (event)=>{
                setNum(event.target.value)
          } }  >
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
    </>
  )
}
