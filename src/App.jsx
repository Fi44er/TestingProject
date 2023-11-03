import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <header>
        <div className="headerLogo">
          <img src="/src/assets/logo.svg" alt="logo" />
          <h1>Тестироввание</h1>
        </div>
        <div className="headerMenu">
          <nav className="headerNav">
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="#">О нас</Link></li>
              <li><Link to="#">Помощь</Link></li>
              <li><Link to="#">Оренбург</Link></li>
            </ul>
          </nav>
          <div>
            <p>+7 (3532) 31-72-39</p>
          </div>
          <div className="profile">
            <Link to='#'>Личный кабинет</Link>
            <img src="/src/assets/profile.svg" alt="profile" />
          </div>
        </div>
      </header>
      {/* <Routes><Route path="/" element={<Home />} /></Routes> */}
    </>
  )
}

export default App
