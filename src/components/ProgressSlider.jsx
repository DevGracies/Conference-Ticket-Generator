import "../App.css";
const ProgressSlider = ({ page = 1, totalPages = 3 }) => {
  const progressPercentage = (page / totalPages) * 100;

  return (
    <div className="slider-container">
      <div className="slider-track">
        <div
          className="slider-progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressSlider;
