import './style.css'
import { useState } from 'react'

const InputTest1 = () => {
    const info = {
        id : 0,
        name : "",
        email : "",
        nickname : ""
    };
    const [inputs, setInputs] = useState(info);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div className="container">
            <form>
                <legend>로그인</legend>
                <label htmlFor="name">이름</label>
                <input 
                    type="text" 
                    className="input" 
                    onChange={handleChange}
                    value={inputs.name}
                    name="name"
                />
                <br />
                <label htmlFor="nickname">닉네임</label>
                <input 
                    type="text" 
                    className="input" 
                    onChange={handleChange}
                    value={inputs.nickname}
                    name="nickname"
                />
                <br />
                <label htmlFor="email">이메일</label>
                <input 
                    type="email" 
                    className="input" 
                    onChange={handleChange}
                    value={inputs.email}
                    name="email"
                />
        
                <button type="submit">확인</button>
                <button type="reset" onClick={() => setInputs(info)}>취소</button>
            </form>
            <div id="modal">
                <hr />
                <div className="wrapper">
                    <div className="wrapp">
                        {inputs.name && <div className="greeting">입력한 이름은 {inputs.name}이고
                            닉네임은 {inputs.nickname}이며,
                            이메일은 {inputs.email}입니다.</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputTest1