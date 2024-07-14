import { useTranslation } from 'react-i18next'
import './App.css'
import Home from './routes/home/Home'
import Nav from './components/nav/Nav'
import Tabs from './routes/tabs/Tabs'
import Cards from './routes/cards/Cards'
import Footer from './components/footer/Footer'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <Home />
      <Tabs />
      <Cards />
      <Footer />
    </>
  )
}

export default App
