import './index.css'

const HistoryElement = props => {
  const {history, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history
  const deleteHistory = () => {
    deleteSearch(id)
    console.log(id)
  }
  return (
    <li className="search-element-container">
      <div className="container-1">
        <p className="time-element">{timeAccessed}</p>
        <div className="container-2">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <div className="container-3">
            <p className="domain-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        testid="delete"
        onClick={deleteHistory}
        className="delete-button"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryElement
