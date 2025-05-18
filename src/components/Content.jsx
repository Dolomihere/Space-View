import { Title } from './Title'
import { UserInfo } from './UserInfo';
import { Sidebar } from './Sidebar'

import './Content.css'

export function Content(props) {
  const { imageUrl, goBackOneDay, goForwardOneDay, formattedDate, data } = props;

  const IsImageSrcEmpty = (src) => !src || src.trim() === "";

  return(
  <>
    <main className="content" >
      <div className="img-frame">
        
        { !IsImageSrcEmpty(imageUrl) ? (
            <img className='img' src={imageUrl} alt="space-img" />
          ) : (
            <p className="warn-info">No image available</p>
          )
        }

      </div>

      <UserInfo></UserInfo>
      <Title goBackOneDay={goBackOneDay} goForwardOneDay={goForwardOneDay} formattedDate={formattedDate} imageUrl={imageUrl} data={data}></Title>
      <div className="side-grid">
        <Sidebar data={data}></Sidebar>
      </div>
    </main>
  </>
  )
}
