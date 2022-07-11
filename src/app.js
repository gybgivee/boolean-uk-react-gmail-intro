import './styles/app.css'

import Header from './components/Header';
import Main from './components/Main';
import LeftMenu from './components/Left-menu'

function App() {
  return (
    <div className="app">
      < Header />
      < LeftMenu />
      < Main />
    </div>
  )
}

export default App
