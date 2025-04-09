import './App.css'

function Car({ brand }: { brand: string }) {
    return <li>{brand}</li>
}

const MapTest = () => {
    //var user = {"name": "soma", "age", 20};
    var foo = ["one", "two", "three"];
    var cars = ["Ford", "BMW", "AUdi", "Mercedes"]

    return(
        <>
            <h1>foo 배열 출력</h1>
            <ul>
                {foo.map((num) => <li>{num}</li>)}
            </ul>
            <h1>차고 속 차 목록</h1>
            <ul>
                {cars.map((car) => <li>I'm a {car}</li>)}
                {cars.map((car) => (
                    <Car brand={car} key={car} />
                ))}
            </ul>
        </>
    )
}

export default MapTest