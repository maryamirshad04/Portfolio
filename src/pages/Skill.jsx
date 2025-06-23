import Skillimg from '../assets/three.jpg';
import './Skill.css';
import { useNavigate } from 'react-router-dom';

export default function Skill() {
  const navigate = useNavigate();

  const handleProceedTomenu = () => {
    navigate('/Menu');
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="skill-container">
      <img src={Skillimg} alt="skill screen" className="skill-image" />
      
      <button
        className="invisible-link explore-link"
        onClick={() =>
          openInNewTab("https://github.com/maryamirshad04/ExplorePakistan.git")
        }
      />

      <button
        className="invisible-link peak-link"
        onClick={() =>
          openInNewTab("https://github.com/maryamirshad04/Peak-Saver.git")
        }
      />

      <button className="arrowth-button" onClick={handleProceedTomenu} />
    </div>
  );
}
