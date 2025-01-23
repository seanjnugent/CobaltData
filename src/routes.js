import Dataset from './pages/Dataset';
import Datasets from './pages/Datasets';
import Home from './pages/Home';
import Organisations from './pages/Organisations';
import Privacy from './pages/Privacy';
import Results from './pages/Results';
import About from './pages/About';
import Categories from './pages/Categories';
import Help from './pages/Help';
import Organisation from './pages/Organisation';

const routes = [
  { path: '/about', element: <About /> },
  { path: '/categories', element: <Categories /> },
  { path: '/home', element: <Home /> },
  { path: '/results', element: <Results /> },
  { path: '/dataset/:id', element: <Dataset /> },
  { path: '/datasets', element: <Datasets /> },
  { path: '/organisations', element: <Organisations /> },
  { path: '/organisation/:id', element: <Organisation /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/results', element: <Results /> },
  { path: '/help', element: <Help /> },
  { path: '/datasets', element: <Results /> },

];

export default routes;