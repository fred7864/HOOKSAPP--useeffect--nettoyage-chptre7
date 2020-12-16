import React, {useState} from 'react'
import  FunctionDisplayKey from './FunctionDisplayKey'

function Containers() {

    const [show, setShow] = useState(true)

   const btnDisplay = show ? 'Cacher' : 'Afficher';

    return (
        <div className="text-center">
            <button className="btn btn-primary m-3" onClick={() => setShow(!show)}>{btnDisplay}</button>
            {
                show &&  <FunctionDisplayKey/>
            }
        </div>
 )
}

export default Containers;
