import './App.css'
import Banner from './Components/Banner/Banner'
import ContactFrom from './Components/ContactFrom/ContactFrom'
import Footer from './Components/Footer/Footer'
import Navber from './Components/Navber/Navber'
import ProvidedServices from './Components/ProvidedServices/ProvidedServices'
import RecentWork from './Components/RecentWork/RecentWork'
import Reviews from './Components/Reviews/Reviews'
import Success from './Components/Success/Success'
import WhyChoose from './Components/WhyChoose/WhyChoose'

function App() {

  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <Success></Success>
    <ProvidedServices></ProvidedServices>
    <RecentWork></RecentWork>
    <WhyChoose></WhyChoose>
    <Reviews></Reviews>
    <ContactFrom></ContactFrom>
    <Footer></Footer>
    </>
  )
}

export default App
