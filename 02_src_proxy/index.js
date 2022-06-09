import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //React.StrictMode 检查app及子组件代码是否合理
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
