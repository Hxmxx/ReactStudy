import './App.css'

const MapTest2 = () => {
    const items = [
        {id: 1, name: "빵"},
        {id: 2, name: "계란"},
        {id: 3, name: "우유"}
    ];
    const ages = [10, 20, 30];
    const result = ages.filter(isAdult);

    function isAdult(age: number) {
        return age >= 20;
    }

    return (
        <>
            <h1>식료품 리스트</h1>
            <ul>
                {items.map((item) => <li key={item.id}> {item.name}</li>)}
            </ul>
            <h1>filter 결과</h1>
            <ul>
                {result.map((age) => <li>{age}</li>)}
            </ul>
        </>
    )
}

export default MapTest2