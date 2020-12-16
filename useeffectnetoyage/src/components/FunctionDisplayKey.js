import React,{useState, useEffect} from 'react'

function FunctionDisplayKey() {

        const [keyCode, setKeycode] = useState('')

        const handlekeycode = e => {
            setKeycode(e.code)
            //console.log('addeventlistner activé' )
        }

        useEffect(()=> {
            document.addEventListener('keyup', handlekeycode)

            return () => {
               // console.log('addeventlistner retiré')
                document.removeEventListener('keyup', handlekeycode) 
            }
        }, [])

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="text-center">{keyCode}</h1>
            </div>            
        </div>
    )
}

export default FunctionDisplayKey
