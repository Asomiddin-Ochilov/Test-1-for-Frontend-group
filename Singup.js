import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from "react-toastify";
function SingUp(props){
    const [name,setName] = useState('')
    const [last,setLast] = useState('')
    const history = useHistory()
    function Push(){
        if(name && last !==''){
            toast.success('test boshlandi')
            props.setUser(name)
            props.setLast(last)
            history.push('/cabinet')
        }
        else {
            toast.error("malumot to'ldiring")
        }
    }
    return(

        <div className={'block'}>
           <input type="text" onChange={(e)=>setName(e.target.value)} placeholder={'firstName'}/>
           <input type="text" onChange={(e)=>setLast(e.target.value)} placeholder={'lastName'}/>
           <button onClick={Push}> START TEST</button>
        </div>
    )
}

export default SingUp