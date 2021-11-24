import React from "react";
import arrowIcon from '../../images/Arrow.svg'

const MainPageBody = () => {
  return (
    <div className="main-page-body">
      <div className="container">
        <div className="hero">
          <h1>JavaScript</h1>
          <div className="go-to-docs">
            <button>Перейти к документации</button>
          </div>
          <img src={arrowIcon} alt="arrow" />
        </div>
        <div className="cards">
            <div className="add-theme">
                <button><span>+</span> Добавить тему</button>
            </div>
            <div className="cards-list">
                <div className="card">HTML</div>
                <div className="card">CSS</div>
                <div className="card">Bootstrap</div>
                <div className="card">Основы JS</div>
                <div className="card">Native JS</div>
                <div className="card">DOM</div>
                <div className="card">React</div>
                <div className="card">React Hooks</div>
                <div className="card">JQuery</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageBody;
