import 'bootstrap/dist/css/bootstrap.min.css';
import "./themes/generated/theme.additional.css";
import './themes/generated/variables.css';
import './themes/dx-styles.scss';
import './styles/global.styles.scss';
import 'components/icons/iconsProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { ThemeProvider } from 'themes/themeContext';
import plMessages from 'devextreme/localization/messages/pl.json';
import { locale, loadMessages } from 'devextreme/localization';
import { licenseKey } from './devextreme-license';
import config from 'devextreme/core/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

config({ licenseKey });

loadMessages(plMessages);
locale('pl');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <ThemeProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
