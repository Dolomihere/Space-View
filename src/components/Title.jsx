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
      <ul className="list">

        <li className="date-title">{formattedDate}</li>

        <li className="title">{data?.title || 'Helloww silly!!'}</li>

        <li className="img-url">
          <span className="link-txt">Image link: </span>
          <a href={imageUrl}>{imageUrl}</a>
        </li>
        
      </ul>
    </div>
  </>
  )
}
