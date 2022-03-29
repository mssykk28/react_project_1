import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//root のIDをもつDOM要素（コンテナ）に <App /> をレンダリングしている。
ReactDOM.render(
  <React.StrictMode>
    <App />
      <h1>mss_deploy</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// アプリでパフォーマンス測定を開始したい場合は、関数を渡します。
// 結果を記録する（例：reportWebVitals(console.log))
// または解析エンドポイントに送信します。詳細はこちら： https://bit.ly/CRA-vitals
reportWebVitals();
