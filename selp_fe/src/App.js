import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>나의 흠냐링</h1>
    </header>
  );
}

function MainContent() {
  return (
    <section>
      <h2>안녕하세요, 환영합니다!</h2>
      <p>이것은 나의 홈페이지입니다. 어서오세요!</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 나의 홈페이지. 모든 권리 보유.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
