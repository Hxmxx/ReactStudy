import { useState } from "react";

const AsyncTest = () => {
    const [error, setError] = useState<string>("");
    const [number, setNumber] = useState<number>(0);

    const increase = async () => {
        try {
            const response = await new Promise((resolve, reject) => {
                if (number > 50) {
                    reject(new Error('50초과의 수는 담을 수 없습니다.'))
                } else {
                    setTimeout(() => {
                        resolve(number + 1)
                    }, 1000)
                }
            })
            setNumber(response as number)
            setError('')
        } catch (error) {
            setError((error as Error).message)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(e.target.value))
    }

    return (
        <div>
            <h1>AsyncTest</h1>
            <input type="number" name="number" value={number} onChange={handleInputChange} />
            <button type="button" onClick={increase}>증가</button>
            {error && <p>{error}</p>}
            <p>{number}</p>
        </div>
    )
    
}

export default AsyncTest