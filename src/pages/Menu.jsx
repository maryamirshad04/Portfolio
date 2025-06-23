import menu from '../assets/option.jpg';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleProceedToAbout = () => {
    navigate('/About');
  };

  const handleProceedToEdu = () => {
    navigate('/Edu');
  };

  const handleProceedToSkill = () => {
    navigate('/Skill');
  };

  return (
    <div className="menu-container">
      <img
        src={menu}
        alt="menu screen"
        className="menu-image"
      />
      <button className="invisible-start-button" onClick={handleProceedToAbout} />
      <button className="invisible-second-button" onClick={handleProceedToEdu} />
      <button className="invisible-third-button" onClick={handleProceedToSkill} />
    </div>
  );
}
