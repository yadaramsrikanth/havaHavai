import Header from '../Header'
import SideBar from '../SideBar'
import Airports from '../Airports'

import './index.css'

const Home = () => (
  <div className="home-main-container">
    <Header />
    <div className="home-view-container">
      <SideBar />
      <Airports />
    </div>
  </div>
)
export default Home
