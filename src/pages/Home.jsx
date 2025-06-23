import mainBg from '../assets/main.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleProceedTomenu = () => {
    navigate('/Menu');
  };
  return (
    <div className="home-container">
      <img
        src={mainBg}
        alt="main screen"
        className="home-image"
      />
      <button className="invisible-start-button" onClick={handleProceedTomenu} />
    </div>
  );
}
