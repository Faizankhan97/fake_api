import { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="home">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="container">
        <h1 className="mb-4">Albums</h1>
        <div className="row">
          {photos.map((photo) => (
            <>
              <div className="col-md-3 mb-4">
                <div className="card" aria-hidden="true">
                  <img src={photo.url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text placeholder-glow">
                      <b>Title:</b> {photo.title}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
