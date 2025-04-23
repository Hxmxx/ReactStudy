import { useState } from "react";
import axios from "axios";

const JsonTest = () => {
    const [data, setData] = useState<any>([]);

    axios.get("http://localhost:4000/test/")
    .then((res) => {
        console.log(res);
        setData(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
    return(
        <>
            {data.map((item: any) => {
                return (
                    <>
                        <div>NAME: {item.name}</div>
                        <div>DESC {item.desc}</div>
                        <hr></hr>
                    </>
                )
            }) }
        </>
    )
}

export default JsonTest