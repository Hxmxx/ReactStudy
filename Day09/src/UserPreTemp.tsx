import { useEffect, useState } from "react";


interface TempProps {
    id: string;
}

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

const UserPerTemp = ({ id }: TempProps) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // 날씨 정보 API 호출
    const fetchWeather = async () => {
        await sleep(2000); // 2초 딜레이
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=ko&appid=${import.meta.env.VITE_WEATHER_API}`
        );
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.statusText);
    };

    useEffect(() => {
        setLoading(true);
        fetchWeather()
            .then((result) => setData(result))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <h4>로딩 중입니다..</h4>;
    if (error) return <h4>에러: {error}</h4>;
    if (!data) return <h4>날씨 데이터를 불러올 수 없습니다.</h4>;

    const tempCelsius = (data.main.temp - 273.15).toFixed(1);

    console.log(data)
    return (
        <div>
            <h3>{id}님의 현재 날씨 정보</h3>
            <p>도시: {data.name}</p>
            <p>기온: {tempCelsius}℃</p>
            <p>날씨: {data.weather[0].description}</p>
            <p>풍향과 풍속: <b>{data.wind.speed}</b>m/s &nbsp; <b>{data.wind.deg}</b>deg</p>
        </div>
    );
};

export default UserPerTemp;