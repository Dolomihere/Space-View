import { useRef, useState, useEffect } from 'react';

import './Sidebar.css'

export function Sidebar() {
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
                Shimeji
              </h2>
            </li>

            <li>
              <p className="explanation">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolorum neque dolores consequatur voluptatum ratione, eligendi quisquam aspernatur, nisi excepturi earum odit quas nam quasi ut illo debitis optio iste?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt blanditiis fugit qui id accusamus similique aliquam voluptate fuga maiores adipisci, earum suscipit fugiat maxime alias corrupti quaerat exercitationem provident odio.
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
