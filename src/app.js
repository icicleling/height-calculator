import React, { useEffect, useState } from 'react';
import './style.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalHidden, setIsModalHidden] = useState(true);

  return (
    <div className="container">
      <main>
        <h1 className="title">请输入你的身高</h1>
        <div className="input-box">
          <input
            type="text"
            className="input-box__input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <span className="input-box__unit">CM</span>
        </div>
      </main>
      <footer>
        <button className="submit-btn" onClick={() => setIsModalHidden(false)}>
          开始计算
        </button>
      </footer>

      <div className="modal" hidden={isModalHidden}>
        <div className="modal__mask"></div>
        <div className="modal__body">
          <div className="modal__close" onClick={() => setIsModalHidden(true)}>
            ×
          </div>
          <div className="modal__content">
            你的身高是<span id="modal-value">{inputValue}</span>CM!
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
