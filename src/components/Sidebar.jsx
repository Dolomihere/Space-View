import { useRef, useState, useEffect } from 'react';

import './Sidebar.css'

export function Sidebar({ data }) {
  const [showModal, setShowModal] = useState(false);

  return(
  <>
    <div className="sidebar">

      { showModal ? 
        <div className="card-info">
          <button onClick={() => setShowModal(false)} className="btn-info"><i className="fa-solid fa-xmark"></i></button>

          <ul className="info-text">

            <li>
              <h2 className="title">
                {data?.title || "Shimeji !!!"}
              </h2>
            </li>

            <li>
              <p className="explanation">
                {data?.explanation || "Woah you get error when loading? ... Tooooo bad enjoy this Shimeji picture while waiting!!! Also did you know that every 60 seconds passed, 1 minute is pass on the earth"}
              </p>
            </li>

          </ul>

        </div>
        :
        <button onClick={() => setShowModal(true)} className="btn-info-under"><i className="fa-solid fa-info"></i></button>
      }

    </div>
  </>
  )
}
