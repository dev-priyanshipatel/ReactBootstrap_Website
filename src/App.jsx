import CuponSlider from "./components/custom/CuponSlider"
import Explore from "./components/custom/Explore"
import Footer from "./components/custom/footer"
import Header from "./components/custom/Header"
import Hero from "./components/custom/Hero"
import Holiday from "./components/custom/Holiday"
import Hotels from "./components/custom/Hotels"
import Payment from "./components/custom/Payment"
import TripImages from "./components/custom/TripImages"



const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <CuponSlider />
      <Holiday />
      <Hotels />
      <TripImages />
      <Explore />
      <Payment />
     <Footer/>
    </>
  )
}

export default App