import about from '../assets/one.jpg';
import './About.css';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleProceedTomenu = () => {
    navigate('/Menu');
  };
  return (
    <div className="about-container">
      <img
        src={about}
        alt="about screen"
        className="about-image"
      />
      <button className="arrow-button" onClick={handleProceedTomenu} />
    </div>
  );
}
