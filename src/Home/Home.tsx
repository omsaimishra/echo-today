import news from '../assets/news.jpg';
import History from '../assets/History.jpg';
import book from '../assets/book.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="carousel-container">
      <div className="container">
        <div className="carousel slide carousel-fade" id="carousel" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={news} alt="News" className="img-fluid w-100 d-block" />
              <div className="carousel-caption d-none d-md-block">
                <h5>What’s Happening Today</h5>
                <p>Get the news that matters to you, right now</p>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img src={History} alt="History" className="img-fluid w-100 d-block" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Step into the Past</h5>
                <p>Explore the chapters that shaped civilizations.</p>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <img src={book} alt="Book" className="img-fluid w-100 d-block" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Bestsellers You Can’t Miss</h5>
                <p>From classics to trending — find your next favorite book.</p>
              </div>
            </div>
          </div>

          <button type="button" className="carousel-control-prev" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button type="button" className="carousel-control-next" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
