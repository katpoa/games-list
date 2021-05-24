import React from 'react';
import Trending from './Trending.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Footer from './Footer.jsx';
import GameEntry from './GameEntry.jsx';


import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBar: true,
      tab: 'trending',
      list: [],
      favorites: [],
    };
    this.setTab = this.setTab.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios('/api/')
      .then(res => this.setState({list: res.data}))
      .catch(err => console.log(err));
  }

  setTab(string) {
    const { tab } = this.state;
    this.setState({tab: string});
  }

  addFavorite (gameId) {
    const { list, favorites } = this.state;
    // update to database through server API endpoints
    const favorite = list.filter(game => game.id === gameId);
    favorites.push(favorite[0]);
    this.setState({ favorites: favorites });
  }

  deleteFavorite (gameId) {
    const { list, favorites } = this.state;
    // update to database through server API endpoints
    const updated = list.filter(game => game.id !== gameId);
    this.setState({ favorites: updated });
  }
  
  render() {
    const { navBar, tab, list } = this.state;
    if (list.expires_in <= 3) {
      this.getAll();
    }
    const currentTab = tab === 'trending' 
      ? <Trending list={list} addFavorite={this.addFavorite} deleteFavorite={this.deleteFavorite}/> 
      : tab === 'search' 
        ? <Search list={list} addFavorite={this.addFavorite} deleteFavorite={this.deleteFavorite}/> 
        : <Favorites />;
    const toggleBar = navBar 
      ? <Footer tab={tab} setTab={this.setTab}/> 
      : <div></div>;
    
    return (
      <Container>
        {currentTab}
        <div>
          {/* add animation to show/hide based on navBar status in state */}
          {toggleBar}
        </div>
      </Container>
    );
  }
};

export default App;

// import React, { useState, useEffect } from 'react';
// // import SWMovies from './SWMovies.jsx';
// import Trending from './Trending.jsx';
// import Search from './Search.jsx';
// import Favorites from './Favorites.jsx';
// import Footer from './Footer.jsx';

// import axios from 'axios';
// import styled from 'styled-components';

// const App = () => {
//   const [list, setList] = useState('');

//   const [navBar, setNavbar] = useState('true');
//   const [tab, setTab] = useState('trending'); // trending, search, favorites

//   useEffect(() => {
//     async function getData() {
//         const response = await axios.get(`/api/`);
//         setList(response.data);
//         console.log(response);
//     }
//     getData();
//   }, [list]);
  
//     return(
//       <div>
//         <h1>TRENDING GAMES</h1>
//         <br></br>
//         {/* <SWMovies /> */}
//         {tab === 'trending' ? <Trending /> : tab === 'search' ? <Search /> : <Favorites />}
//         <div>
//           {/* add animation to show/hide based on navBar status in state */}
//           {navBar ? <Footer setTab={setTab}/> : <div></div>}
//         </div>
//       </div>
//     );
// }

// export default App;
