import {useState, useEffect} from 'react';
import React from 'react';
import GNB from '../components/GNB';



const useEffect1 = () => {
    const [inputs, setInputs] = useState({name: '', nickname: ''});
    const [depname, setDepName] = useState('');
    const [modal, setModal] = useState(true);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        console.log('마운트 됨');
        setTimeout(()=>{setModal(false);}, 3000);
    }, [])

    useEffect(()=>{
        console.log(`effect 함수 변경 후 이름: ${depname}`);
        return () => {
            console.log(`effect 함수 변경 전 이름: ${depname}`)
        };
    },[depname])

    function Modal() {
        return <div style = {{height: "20vh", width: "80vw;", backgroundColor: "#efefef"}}>
            useEffect 실습입니다.
        </div>
    }
    return (
        <>
            <div>
                <input 
                    type="text" 
                    name="name"
                    onChange={onChange} 
                />
                <input 
                    type="text" 
                    name="nickname"
                    onChange={onChange} 
                />
                <button onClick={() => setDepName(inputs.name)}>이름 변경</button>
            </div>
            <div>
                <b>NAME: </b> {inputs.name}
                <b>NICKNAME: </b> {inputs.nickname}
            </div>
            {modal && <Modal />}
            <GNB / >
        </>
    )
}

export default useEffect1