const HolidayService = ({ title, des, icon, iconClass,bgClass }) => {
  return (
    <div className="col-sm-6">
      <div className={`icon-lg text-center ${bgClass} bg-opacity-10 rounded-circle `}>
        <i className={`${icon} ${iconClass} fs-4`}></i>
      </div>
      <h5 className="mt-2 fw-bold">{title}</h5>
      <p className="mb-0">{des}</p>
    </div>
  );
};

export default HolidayService