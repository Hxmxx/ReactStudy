import './style.css'
import { useState } from 'react'

const InputTest1 = () => {
    const info = {
        id : 0,
        name : "",
        email : ""
    };
    const infoAdd = {
        ...info,
        email : "abc@gmail.com"
    };
    console.log(infoAdd);

    const [user, setUser] = useState(info);

    return (
        <div className="container">
            <form>
                <legend>로그인</legend>
                <label htmlFor="name">이름</label>
                <input type="text" className="input" onChange={(e) => setUser({
                    ...user,
                    id: 0,
                    name: e.target.value
                })} value={user.name} />
                <br />
                <label htmlFor="email">이메일</label>
                <input type="text" className="input" onChange={(e) => setUser({
                    ...user,
                    email: e.target.value
                })} value={user.email} />
        
                <button type="submit">확인</button>
                <button type="reset" onClick={() => setUser(info)}>취소</button>
            </form>
            <div id="modal">
                <hr />
                <div className="wrapper">
                    <div className="wrapp">
                        {user.name &&<div className="greeting">입력한 이름은 {user.name}이고 
                            입력된 이메일은 {user.email}입니다.</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputTest1