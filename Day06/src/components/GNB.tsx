import { useNavigate } from "react-router-dom";

const GNB = () => {
    const navigate = useNavigate();
    return (
        <nav>
                <button onClick={() => navigate(-1)}>뒤로가기</button>
                <button onClick={() => navigate('/')}>홈</button>
                <button onClick={() => navigate('/about')}>About</button>
                <button onClick={() => navigate('/useEffect1')}>유즈이펙트</button>
        </nav>
    )
}
export default GNB