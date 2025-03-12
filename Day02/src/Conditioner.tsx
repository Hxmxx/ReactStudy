import { useState } from "react";
import './Conditioner.css'

const Conditioner = () => {
    const [login, isLogin] = useState(false);
    
    return(
        <div>
            {login && <button onClick={() => {isLogin(!login)}}> 로그아웃 </button>}
            {login ? <span>환영합니다!~~~~</span> : null}
            {!login && <button onClick={() => {isLogin(!login)}}> 로그인 </button>}
            <hr />
            <p>모두 함께 리액트 공부</p>

        </div>
    )
}

export default Conditioner