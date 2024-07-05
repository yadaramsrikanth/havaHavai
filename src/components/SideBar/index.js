import {Link} from 'react-router-dom'
import './index.css'

const SideBar = () => (
  <ul className="side-bar-container">
    <Link to="/">
      <li className="list-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          viewBox="0 0 18 18"
          width="18"
        >
          <title>S Home 18 N</title>
          <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
          <path
            className="fill"
            d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"
          />
        </svg>
        <p className="home-list-item">Home</p>
      </li>
    </Link>
    <li className="list-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18"
        viewBox="0 0 18 18"
        width="18"
      >
        <title>S Apps 18 N</title>
        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
        <rect className="fill" height="3" rx="0.5" width="3" x="1" y="1" />
        <rect className="fill" height="3" rx="0.5" width="3" x="7" y="1" />
        <rect className="fill" height="3" rx="0.5" width="3" x="13" y="1" />
        <rect className="fill" height="3" rx="0.5" width="3" x="1" y="7" />
        <rect className="fill" height="3" rx="0.5" width="3" x="7" y="7" />
        <rect className="fill" height="3" rx="0.5" width="3" x="13" y="7" />
        <rect className="fill" height="3" rx="0.5" width="3" x="1" y="13" />
        <rect className="fill" height="3" rx="0.5" width="3" x="7" y="13" />
        <rect className="fill" height="3" rx="0.5" width="3" x="13" y="13" />
      </svg>
      <p className="home-list-item">Dashboard</p>
    </li>
    <li className="services-list-item">Services</li>
    <li className="services-list-item airports-list-item">Airports</li>
    <li className="services-list-item">Videos</li>
    <li className="others-list-item">Others</li>
    <li className="others-list-items">List 1</li>
    <li className="others-list-items">List 2</li>
    <li className="others-list-items">List 3</li>
  </ul>
)

export default SideBar
