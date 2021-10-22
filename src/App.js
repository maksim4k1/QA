import AppRoutes from './components/AppRoutes';
import Detail from './pages/Detail';
import Error404 from './pages/errors/Error404';
import Main from './pages/Main';
import './styles/App.css';

const routes = [
  {path: "/", component: Main, exact: true},
  {path: "/detail/:id", component: Detail, exact: true},
  {path: "/error/404", component: Error404, exact: true},
];

function App() {
  return (
    <div className="App">
      <AppRoutes routes={routes}/>
    </div>
  );
}

export default App;