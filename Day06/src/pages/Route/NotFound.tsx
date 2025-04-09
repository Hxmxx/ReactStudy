import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
            <h2>페이지를 찾을 수 없습니다</h2>
            <p>요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
            <button 
                onClick={() => navigate('/')}
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}
            >
                홈으로 돌아가기
            </button>
        </div>
    );
};

export default NotFound; 