//import RouterTest from "./RouterTest";
import { useNavigate } from "react-router-dom";
const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
       
      <h1> No Page Not found 404</h1>
      <h2 onClick={navigate(-1)}>뒤로가기</h2>
    </div>
  );
};
export default NoPage;
