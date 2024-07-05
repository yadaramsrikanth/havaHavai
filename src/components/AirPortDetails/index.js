import Popup from 'reactjs-popup'

import Header from '../Header'
import SideBar from '../SideBar'

import './index.css'

const AirPortDetails = () => (
  <div className="details-main-container">
    <Header />
    <div className="details-container">
      <SideBar />
      <div className="airport-details-container">
        <p className="airport-details-heading">
          Airports
          <span className="span-element">
            {`>`} Indira Gandhi International Airport
          </span>
        </p>
        <h1 className="airport-name">Indira Gandhi International Airport</h1>

        <ul className="airport-points">
          <li className="terminal">Terminals</li>
          <li className="terminal">Transport</li>
          <li className="terminal">Contact details</li>
        </ul>
        <div className="terminals-container">
          <div className="terminal-containerr">
            <img
              src="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1720163073/hava_image_ukn166.png"
              alt="terminal-image"
              className="terminal-image"
            />
            <div>
              <div className="trminal1-container">
                <p className="terminal-1-heading">Terminal 1</p>
                <p className="terminal-1-heading">...</p>
              </div>
              <p>Optional metadata should be two lines.</p>
            </div>
          </div>
          <div className="terminal-containerr">
            <img
              src="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1720163073/hava_image_ukn166.png"
              alt="terminal-image"
              className="terminal-image"
            />
            <div>
              <div className="trminal1-container">
                <p className="terminal-1-heading">Terminal 2</p>
                <p className="terminal-1-heading">...</p>
              </div>
              <p>Optional metadata should be two lines.</p>
            </div>
          </div>

          <Popup
            modal
            trigger={
              <button type="button" className="add-terminal-button">
                +Add Terminal
              </button>
            }
          >
            {close => (
              <div className="popup-container">
                <h1 className="terminal-title">Terminal Title</h1>
                <hr className="horizontal-line" />
                <p className="popup-description">Description</p>
                <div className="buttons-container">
                  <button type="button" className="upload-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 18 18"
                      width="18"
                    >
                      <title>S UploadToCloud 18 N</title>
                      <rect
                        id="Canvas"
                        fill="#ff13dc"
                        opacity="0"
                        width="18"
                        height="18"
                      />
                      <path
                        className="fill"
                        d="M8,16.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V12H8Z"
                      />
                      <path
                        className="fill"
                        d="M14.786,5.5715a3.22315,3.22315,0,0,0-.363.0205A4.072,4.072,0,1,0,6.462,3.974,3.431,3.431,0,0,0,2.2585,8.171,1.9285,1.9285,0,1,0,1.9285,12H8V9H5.85a.35.35,0,0,1-.35-.35.34252.34252,0,0,1,.1035-.245l3.234-2.8425a.25.25,0,0,1,.325,0l3.234,2.8425A.34252.34252,0,0,1,12.5,8.65a.35.35,0,0,1-.35.35H10v3h4.786a3.2145,3.2145,0,0,0,0-6.4285Z"
                      />
                    </svg>
                    <span>upload image</span>
                  </button>
                  <button
                    className="cancel-button"
                    type="button"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                  <button className="cancel-button" type="button">
                    Continue
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <h1 className="Services">Services</h1>
        <p className="lost-Found">Lost & Found</p>
        <hr className="horizontal-line" />
        <div className="lost-found-details-container">
          <div className="service-container">
            <p className="service-name">Service Name</p>
            <p className="lost-found-service">Lost & Found</p>
          </div>
          <div className="service-container">
            <p className="service-name">Category</p>
            <select className="select-option">
              <option>Option1 </option>
            </select>
          </div>
          <div className="service-container">
            <p className="service-name">Sub Category</p>
            <select className="select-option">
              <option>Option1 </option>
            </select>
          </div>
          <button type="button" className="upload-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 18 18"
              width="18"
            >
              <title>S UploadToCloud 18 N</title>
              <rect
                id="Canvas"
                fill="#ff13dc"
                opacity="0"
                width="18"
                height="18"
              />
              <path
                className="fill"
                d="M8,16.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V12H8Z"
              />
              <path
                className="fill"
                d="M14.786,5.5715a3.22315,3.22315,0,0,0-.363.0205A4.072,4.072,0,1,0,6.462,3.974,3.431,3.431,0,0,0,2.2585,8.171,1.9285,1.9285,0,1,0,1.9285,12H8V9H5.85a.35.35,0,0,1-.35-.35.34252.34252,0,0,1,.1035-.245l3.234-2.8425a.25.25,0,0,1,.325,0l3.234,2.8425A.34252.34252,0,0,1,12.5,8.65a.35.35,0,0,1-.35.35H10v3h4.786a3.2145,3.2145,0,0,0,0-6.4285Z"
              />
            </svg>
            <span>upload image</span>
          </button>
          <button type="button" className="toggle-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 18 18"
              width="18"
            >
              <title>S Boolean 18 N</title>
              <rect
                id="Canvas"
                fill="#ff13dc"
                opacity="0"
                width="18"
                height="18"
              />
              <path
                className="fill"
                d="M12,4.25a4.75,4.75,0,0,1,0,9.5H6a4.75,4.75,0,0,1,0-9.5ZM12,3H6A6,6,0,0,0,6,15h6A6,6,0,0,0,12,3Zm0,3A3,3,0,1,1,9,9,3,3,0,0,1,12,6Z"
              />
            </svg>
            <span className="show-image">Show image</span>
          </button>
          <button type="button" className="service-save-button">
            Save
          </button>
        </div>
        <p className="service-name">Description</p>
        <input type="text" placeholder="type here" className="input-element" />

        <p className="service-name">Lounge</p>
        <hr className="horizontal-line" />
        <p className="service-name">Money Exchange</p>
        <hr className="horizontal-line" />
      </div>
    </div>
  </div>
)

export default AirPortDetails
