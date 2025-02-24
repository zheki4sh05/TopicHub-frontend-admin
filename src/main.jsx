import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { store } from './app/store/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <App />
    </Provider>
 
)