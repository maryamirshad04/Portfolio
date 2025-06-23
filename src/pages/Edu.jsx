import Eduimg from '../assets/two.jpg';
import './Edu.css';
import { useNavigate } from 'react-router-dom';

export default function Edu() {
  const navigate = useNavigate();

  const handleProceedTomenu = () => {
    navigate('/Menu');
  };
  return (
    <div className="edu-container">
      <img
        src={Eduimg}
        alt="edu screen"
        className="edu-image"
      />
      <button className="arrowt-button" onClick={handleProceedTomenu} />
    </div>
  );
}
