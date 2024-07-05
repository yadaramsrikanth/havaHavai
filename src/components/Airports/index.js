import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AirPortItem from '../AirPortItem'

import './index.css'

const airportsList = [
  {
    id: uuidv4(),
    name: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: 3,
  },
  {
    id: uuidv4(),
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminals: 5,
  },
  {
    id: uuidv4(),
    name: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminals: 6,
  },
  {
    id: uuidv4(),
    name: 'Istanbul Airport',
    country: 'Turkey',
    code: 'IST',
    terminals: 3,
  },

  {
    id: uuidv4(),
    name: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DEW',
    terminals: 14,
  },
]

class Airports extends Component {
  state = {airports: airportsList}

  onAddNewAirport = event => {
    event.preventDefault()
  }

  deletingAirport = id => {
    const {airports} = this.state
    const filteredAirPorts = airports.filter(eachItem => eachItem.id !== id)
    this.setState({airports: filteredAirPorts})
  }

  render() {
    const {airports} = this.state

    return (
      <div className="airport-main-container">
        <form className="form-container" onSubmit={this.onAddNewAirport}>
          <h1 className="form-heading">Airports</h1>
          <button type="submit" className="add-button">
            + Add new
          </button>
        </form>
        <div className="table-container">
          <div>
            <input type="checkbox" id="airport-checkbox" />
            <label className="all-airport-label" htmlFor="airport-checkbox">
              All Airports
            </label>
          </div>
          <p className="table-item">Country</p>
          <p className="table-item">Code</p>
          <p className="table-item">Terminals</p>
        </div>
        {airports.length === 0 ? (
          <p className="not-Listed-any">No Listed Airports</p>
        ) : (
          <ul className="unordered-items-container">
            {airports.map(eachAirport => (
              <AirPortItem
                eachAirport={eachAirport}
                key={eachAirport.id}
                deletingAirport={this.deletingAirport}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Airports
