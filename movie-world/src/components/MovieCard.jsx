const MovieCard = ({ imdbID, title, detail, image, addMovieList }) => {
  const handleOnClick = (type) => {
    let tempMovie = {
      imdbID,
      title,
      detail,
      image,
      type,
    };
    addMovieList(tempMovie);
  };
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
            <button
              className="btn btn-primary"
              onClick={() => {
                handleOnClick("drama");
              }}
            >
              Drama
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                handleOnClick("action");
              }}
            >
              Action
            </button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
