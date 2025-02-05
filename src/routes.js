import Dataset from './pages/Dataset';
import Datasets from './pages/Datasets';
import Home from './pages/Home';
import Organisations from './pages/Organisations';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Categories from './pages/Categories';
import Help from './pages/Help';
import Organisation from './pages/Organisation';
import DatasetExplorer from './pages/DatasetExplorer';
import Category from './pages/Category';
import DatasetAnalysis from './pages/DatasetAnalysis';

const routes = [
  { path: '/about', element: <About /> },
  { path: '/categories', element: <Categories /> },
  { path: '/category/:categoryName', element: <Category /> },
  { path: '/home', element: <Home /> },
  { path: '/results', element: <Datasets /> },
  { path: '/dataset/:id', element: <Dataset /> },
  { path: '/dataset/:id/explore/:resourceId', element: <DatasetExplorer /> },
  { path: '/datasets', element: <Datasets /> },
  { path: '/organisations', element: <Organisations /> },
  { path: '/organisation/:organisationName', element: <Organisation /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/help', element: <Help /> },
  { path: '/analyse-dataset', element: <DatasetAnalysis /> }, 
];

export default routes;