import React, { useEffect } from 'react';
import './style.css';

const App = () => {
  useEffect(() => {
    const inputEl = document.querySelector('#height-input');
    const buttonEl = document.querySelector('#submit-btn');
    const modalEl = document.querySelector('#modal');
    const modalValueEl = document.querySelector('#modal-value');

    buttonEl.addEventListener('click', () => {
      const inputValue = inputEl.value;
      modalValueEl.innerHTML = inputValue;
      modalEl.style.display = 'block';
    });

    modalEl.addEventListener('click', (e) => {
      if (e.target.className !== 'modal__close') {
        return;
      }

      modalEl.style.display = 'none';
    });
  }, []);

  return (
    <div className="container">
      <main>
        <h1 className="title">请输入你的身高</h1>
        <div className="input-box">
          <input id="height-input" type="text" className="input-box__input" />
          <span className="input-box__unit">CM</span>
        </div>
      </main>
      <footer>
        <button className="submit-btn" id="submit-btn">
          开始计算
        </button>
      </footer>

      <div className="modal" id="modal">
        <div className="modal__mask"></div>
        <div className="modal__body">
          <div className="modal__close">×</div>
          <div className="modal__content">
            你的身高是<span id="modal-value"></span>CM!
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
