import axios from "axios";
import { useEffect, useState } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const setAlbumApi = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      if (res.status == 200) {
        setAlbums(res?.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setAlbumApi()
    setLoading(true);
    // fetch("https://jsonplaceholder.typicode.com/albums")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAlbums(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
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
        <ul>
          {albums.map((album) => (
            <li key={album.id}>{album.id} - {album.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Albums;
