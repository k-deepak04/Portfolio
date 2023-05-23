import React from 'react';
import { About, Footer, Header, Skills,Work} from './container';
import Achievement from './container/Achievement/Achievement';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Achievement/>
    <Footer />
    </div>
 );
}

export default App;
