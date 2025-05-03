import "./Title.css"

export function Title(props) {
  const { goBackOneDay, goForwardOneDay, formattedDate, imageUrl, data } = props;

  return(
  <>
    <div className="flip-btn">
      <button onClick={() => goBackOneDay()}>
        <i className="fa-solid fa-left-long"></i>
      </button>
      <button onClick={() => goForwardOneDay()}>
        <i className="fa-solid fa-right-long"></i>
      </button>
    </div>

    <div className="big-title">

      <h3 className="date-title">{formattedDate}</h3>

      <div className="img-url">
        <p>Image link: {imageUrl}</p>
      </div>

      <h4>{data?.title || 'Helloww silly!!'}</h4>
    </div>
  </>
  )
}
