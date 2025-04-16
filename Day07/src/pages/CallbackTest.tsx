import { useState } from 'react';

const CallbackTest = () => {
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<string>('');

    const increase = async () => {
        try {
            const response = await new Promise<number>((resolve, reject) => {
                setTimeout(() => {
                    if (number >= 50) {
                        reject(new Error('50이상의 수는 처리할 수 없습니다.'))
                    } else {
                        resolve(number + 1)
                    }
                }, 1000)
            });
            setNumber(response);
            setResult('증가 성공!');
        } catch (error) {
            setResult((error as Error).message);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(e.target.value));
    }

    return (
        <div>
            <h1>CallbackTest</h1>
            <input 
                type="number" 
                value={number} 
                onChange={handleInputChange}
            />
            <button type="button" onClick={increase}>증가</button>
            {result && 
                <>
                    <p>{result}</p>
                    <p>{number}</p>
                </>
            }
        </div>
    )
}

export default CallbackTest