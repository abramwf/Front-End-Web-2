import { useState } from 'react';
import './App.css';
import './components/Wishlist.css';
import './components/Navbar.css';
import './components/Overview.css';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState([]);
  const [page, setPage] = useState('movies')
 
  const [movies] = useState (
    [
      {
        name: 'Merah Putih Memanggil',
        image: 'https://m.media-amazon.com/images/M/MV5BMDIxNTdhYzUtNGY3My00MTljLTlmNTctODA5MjAzN2JlN2Y3XkEyXkFqcGdeQXVyMTgyOTQ3ODM@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
        overview: "The story begins with hijacking an Indonesia medium-sized yacht flag within territory of Indonesia by international terrorists. One crew member was shot dead on board for insubordination. Four crew members including captains along with three French citizens, one Canadian citizen and one South Korean citizen were kidnapped and taken to an area in the southern part of a neighboring country"
      },
      {
        name: 'Black Hawk Down',
        image: 'https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        overview: 'The story of 160 elite U.S. soldiers who dropped into Mogadishu in October 1993 to capture two top lieutenants of a renegade warlord, but found themselves in a desperate battle with a large force of heavily-armed Somalis.'
      },
      {
        name: 'K-On! The Movie',
        image: 'https://m.media-amazon.com/images/M/MV5BZDM5YzJiMzAtNTIwZS00YjIzLTg3MGYtYmNlZmVjNjMxMmI3XkEyXkFqcGdeQXVyMTA0OTc2NzQ@._V1_FMjpg_UX1000_.jpg',
        overview: "In this continuation of the K-On anime, the girls from the band \"After School Tea Time \" go on a trip to London."
      },
      {
        name: 'Kungfu Hustle',
        image: 'https://m.media-amazon.com/images/M/MV5BZDNjNGI3NjUtMWU2OC00ZWQ5LWIxMDYtZjllZDdhZDE1NWQ0XkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg',
        overview: "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious \"Axe Gang \" while residents of a housing complex exhibit extraordinary powers in defending their turf."
      },
      {
        name: 'Panfilov\'s 28',
        image: 'https://m.media-amazon.com/images/M/MV5BMTM3NDliOWMtOTU4MC00ZjFlLWJlZmItMTkwOTQ2YTI5M2VhXkEyXkFqcGdeQXVyNjg1NDU4NDM@._V1_.jpg',
        overview: "In November 1941, remaining squad of Soviet soldiers must stop a column of Nazi Germany tanks."
      },
      {
        name: '71: Into the Fire',
        image: 'https://m.media-amazon.com/images/M/MV5BYWNjN2MwM2UtOGM5YS00MTU1LTgwOWUtYTkyMTA4ZmMwNzVmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_.jpg',
        overview: "The story of student-soldiers trying to protect a middle school during the early days of the Korean War."
      },
    ]);

    const addToWishlist = (movie) => {
      setWishlist([...wishlist, {...movie}]);
    };

    const removeFromWL = (movieToRemove) => {
      setWishlist(
        wishlist.filter((movie) => movie !== movieToRemove)
      );
    };

    const toOverviewHandler = (movie) => {
      setOverview([...overview, {...movie}]);
      setPage('overview');
    };

    const fromOverviewHandler = (overviewToRemove) => {
      setOverview(
        overview.filter((movie) => movie !== overviewToRemove)
        );
      navigateTo('movies');
    };

    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };

    const renderMovies = () => (
      <>
            <div className = "Navbar">
              <ul>
                <li>
                  <h2>GGmovIE</h2>
                </li>
                  <li>
                    <a onClick={() => navigateTo('movies')} className = "ActivedHome"><h4>HOME</h4></a>
                  </li>
                    <li>
                      <a onClick={() => navigateTo('wishlist')} className="WLButton">WISHLIST ({wishlist.length})</a>
                    </li>
                  </ul>
              </div>
              <div className="Cards">
              {movies.map((movie, idx) => (
                <div className = "Card" key={idx}>
                  <img onClick={() => toOverviewHandler(movie)} className="MoviePoster" src = {movie.image}></img>
                  <div className = "Container">
                    <h5>{movie.name}</h5>          
                    <div onClick={() => addToWishlist(movie)} className="Button">
                    <p>-----------    ADD    -----------</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <footer>
                <div>
                  <h3>
                    Thank you Riz (ig:rizyxy) from Abram Widi F :)
                  </h3>
                </div>
              </footer>
              </>
    );

    const renderOverview = () => (
      <>
      <div className = "Navbar">
        <ul>
            <li>
                <h2>GGmovIE</h2>
            </li>
        </ul>
      </div>
      <div className = "OverviewHeader" >
          <h5>DESCRIPTION</h5>
          </div>
      <div className="OverviewContent">
          <div className = "Overview">
            {overview.map((movie, idx) => (
            <div className = "OverviewContainer">
              <img className = "OverviewPoster" src = {movie.image}></img>
              <div className = "MovieOverview">
                <p>{movie.overview}</p>
              </div>
              <h5 className="BackButton" onClick={() => fromOverviewHandler(movie)}>Back<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></h5>
            </div>
          ))}
          </div>
      </div>
      <footer>
          <div>
              <h3>
                ENJOY :) :)
              </h3>
           </div>
        </footer>
      </>
    )

    const renderWishlist = () => (
      <>
      <div className = "Navbar">
                  <ul>
                      <li>
                        <h2>GGmovIE</h2>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "Home">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="ActivedWL">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
      </div>
      <div className = "Wishlist">
        <div className = 'WishlistContent'>
          <div className = "WishlistHeader">
            <h5>Wishlist</h5>
          </div>
          <div className = "WishlistBody">
            <div className = "WishlistCards">
              {wishlist.map((movie, idx) => (
                <div className = "WishlistCard">
                  <div className = "Details">
                    <img src = {movie.image}></img>
                    <h5>{movie.name}</h5>
                  </div>
                  <div className = "RemoveButton">
                    <h5 onClick={() => removeFromWL(movie)}>Remove</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
    );

  return (
    <div className="App">
            {page === 'movies' && renderMovies()}
            {page === 'overview' && renderOverview()} 
            {page === 'wishlist' && renderWishlist()}
    </div>
  );
}
export default App;