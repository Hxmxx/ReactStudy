import './inputText.css'
import { useState } from 'react';

const InputText = () => {
    const [value, setValue] = useState('');

    return (
        <div className="">
            <input type="text" className="input" onChange={(e) => setValue(e.target.value)} value={value} />
            <button className="btn" onClick={() => setValue('')}>초기화</button>

            <div id="modal">
                <hr />
                <div className="wrapper">
                    <div className="wrapp">
                        {value &&<div className="greeting">입력한 값은 {value}입니다.</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputText