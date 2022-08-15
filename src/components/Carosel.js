import React from "react";
import "../components/css/Carosel.css";

function Carosel() {
  return (
    <>
      <div className="container-fluid carosel-conrainer">
        <div className="row">
          <div className="col">
          <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide carosel"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://wallpaperaccess.com/full/1515369.jpg"
              class="d-block w-100 carosel-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="carosel-text">Bike Bazzar</h5>
              <p className="carosel-text">
                You Can Buy Best Bikes In Good Condition
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://wallup.net/wp-content/uploads/2019/09/8913-bike-motorbike-old-classic-triumph-motorbikes-motorbikes-cafe-racer-1.jpg"
              class="d-block w-100 carosel-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="carosel-text">Bike Bazzar </h5>
              <p className="carosel-text">
              You Can Sell Your Bike In Easy Process
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/445755.jpg"
              class="d-block w-100 carosel-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="carosel-text">Bike Bazzar</h5>
              <p className="carosel-text">
                You Can Sell Your Bike In Best Prize
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carosel;

{
  /* <div class="container">
        <div class="row">
          <div class="col">
            <div id="carouselExampleControls" class="carousel slide mt=0" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./image/10.jpg" class="d-block w-100 carosel_img"  alt="img-Loading"/>
                </div>
                <div class="carousel-item">
                  <img src="./image/rs.jpg" class="d-block w-100 carosel_img"  alt="img-Loading"/>
                </div>
                <div class="carousel-item">
                  <img src="/image/11.jpg" class="d-block w-100 carosel_img"  alt="img-Loading"/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */
}
