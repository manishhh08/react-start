const MovieCard = ({ title, detail, image }) => {
  return (
    <>
      <div className="moviecard">
        <img
          src={image}
          alt="default image"
          style={{ height: "200px", width: "200px" }}
        />
        <div className="card-details">
          <div className="card-header">{title}</div>
          <div className="card-info">{detail}</div>
          <div className="card-button">
            <button>Drama</button>
            <button>Action</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
