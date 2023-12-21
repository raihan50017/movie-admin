import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";
import axios from "axios";

function Home() {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    image: null,
    overview: "",
    release_date: "",
    genres: "",
    runtime: "",
    director: "",
    cast: "",
    trailer_url: "",
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    const updatedFormData = {
      ...formData,
      [name]: files ? files[0] : value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("overview", formData.overview);
    formDataToSend.append("release_date", formData.release_date);
    formDataToSend.append("genres", formData.genres);
    formDataToSend.append("runtime", formData.runtime);
    formDataToSend.append("director", formData.director);
    formDataToSend.append("cast", formData.cast);
    formDataToSend.append("trailer_url", formData.trailer_url);
    try {
      const response = await axios.post(
        "http://localhost:8080/movie/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle response
      console.log("Response:", response);
      setErrors({});
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      setErrors(error.response.data?.errors);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="row p-4 g-0">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="shadow-sm movie-upload-card p-4 rounded">
            <h5 className="text-center">Upload New Movie</h5>
            <div className="mt-2">
              <form
                onSubmit={handleSubmit}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="mb-3">
                  <label for="title" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="form-control form-control-sm"
                    id="title"
                    name="title"
                  ></input>
                  <span className="text-danger">{errors.title}</span>
                </div>
                <div className="mb-3">
                  <label for="genres" className="form-label">
                    Genre (seperate by comma)
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="form-control form-control-sm"
                    id="genres"
                    name="genres"
                  ></input>
                  <span className="text-danger">{errors.genres}</span>
                </div>
                <div className="mb-3">
                  <label for="director" className="form-label">
                    Director
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="form-control form-control-sm"
                    id="director"
                    name="director"
                  ></input>
                  <span className="text-danger">{errors.director}</span>
                </div>
                <div className="mb-3">
                  <label for="cast" className="form-label">
                    Cast (seperate by comma)
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="form-control form-control-sm"
                    id="cast"
                    name="cast"
                  ></input>
                  <span className="text-danger">{errors.cast}</span>
                </div>
                <div className="mb-3">
                  <label for="release_date" className="form-label">
                    Release Data
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="date"
                    className="form-control form-control-sm"
                    id="release_date"
                    name="release_date"
                  ></input>
                  <span className="text-danger">{errors.release_date}</span>
                </div>
                <div className="mb-3">
                  <label for="runtime" className="form-label">
                    Runtime
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="number"
                    className="form-control form-control-sm"
                    id="runtime"
                    name="runtime"
                  ></input>
                  <span className="text-danger">{errors.runtime}</span>
                </div>
                <div className="mb-3">
                  <label for="image" className="form-label">
                    Poster
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="file"
                    className="form-control form-control-sm"
                    id="image"
                    name="image"
                  ></input>
                  <span className="text-danger">{errors.image}</span>
                </div>
                <div className="mb-3">
                  <label for="trailer_url" className="form-label">
                    Trailer URL
                  </label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="form-control form-control-sm"
                    id="trailer_url"
                    name="trailer_url"
                  ></input>
                  <span className="text-danger">{errors.trailer_url}</span>
                </div>
                <div className="mb-3">
                  <label for="overview" className="form-label">
                    Overview
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    type="text"
                    className="form-control form-control-sm"
                    id="overview"
                    name="overview"
                  ></textarea>
                  <span className="text-danger">{errors.overview}</span>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}

export default Home;
