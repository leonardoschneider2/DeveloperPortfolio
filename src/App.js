import { Route, Switch } from 'react-router-dom';
import './App.css';
import FirstLine from './components/ContentFirstLine';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './routes/About';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Home from './routes/Home';
import NoMatch from './routes/NoMatch';
import Services from './routes/Services';

function App() {
  return (
    <>
      <Header/>
      <FirstLine/>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/blog" component={ Blog }/>
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/services" component={ Services } />
        <Route exact path="/about" component={ About } />
        <Route component={ NoMatch } />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
