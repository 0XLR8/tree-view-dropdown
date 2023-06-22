import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import {App} from './App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);