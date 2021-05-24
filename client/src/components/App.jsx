import React from 'react';
import Trending from './Trending.jsx';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Footer from './Footer.jsx';
import GameEntry from './GameEntry.jsx';


import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Poppins, sans-serif;
  fontWeight: 600;
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
      list: []
    };
    this.getAll = this.getAll.bind(this);
    this.setTab = this.setTab.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.getCovers = this.getCovers.bind(this);
    // this.matchArt = this.matchArt.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios('/api/')
      .then(res => this.setState({list: res.data}))
      .then(this.getCovers())
      .catch(err => console.log(err));
  }

  getCovers() {
    const { list } = this.state;
    for (let i = 0; i < list.length; i++) {
      axios('/api/covers?id=' + list[i].cover)
        // .then(res => console.log(res.data.url))
        .then(res => list[i].cover = 'https:' + res.data.url.replace('t_thumb', 't_cover_big'))
        // .then(res => this.setState({ covers: res.data }))
        .catch(err => console.log(err));
    }
    // this.matchArt();
  }

  // matchArt() {
  //   const { list, covers } = this.state;
  //   for (let i = 0; i < list.length; i++) {
  //     for (let j = 0; j < covers.length; j++) {
  //       if (list[i].cover === covers[j].id) {
  //         console.log(covers[j].url, ' this is the cover image url')
  //         list[i].cover = 'https:' + covers[j].url.replace('t_thumb', 't_cover_big');
  //       }
  //     }
  //   }
  //   this.setState({ list: list });
  // }

  setTab(string) {
    const { tab } = this.state;
    this.setState({tab: string});
  }

  toggleFavorite (gameId) {
    const { list } = this.state;
    // update to database through server API endpoints
    list.map(game => {
      if (game.id === gameId) {
        game.favorite = !game.favorite;
      }
    });
    this.setState({ list: list });
  }
  
  render() {
    const { navBar, tab, list } = this.state;
    // if (list.expires_in <= 3) {
    //   this.getAll();
    // }
    const currentTab = tab === 'trending' 
      ? <Trending list={list} toggleFavorite={this.toggleFavorite}/> 
      : tab === 'search' 
        ? <Search list={list} toggleFavorite={this.toggleFavorite}/> 
        : <Favorites list={list} toggleFavorite={this.toggleFavorite}/>;
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
