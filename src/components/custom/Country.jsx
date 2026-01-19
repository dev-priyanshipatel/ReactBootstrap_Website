const Country = ({ title, des, imgUrl }) => {
  return (
    <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
      <div className="county bg-transperent text-center p-1 card border-0">
        <img src={imgUrl} alt="img" className="rounded-circle img-fluid" />
        <div className="card-body p-0 pt-3">
          <h5 className="card-title fs-3 fw-bold">{title}</h5>
          <span>{des}</span>
        </div>
      </div>
    </div>
  );
};

export default Country