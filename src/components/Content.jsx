import { Title } from './Title'
import { UserInfo } from './UserInfo';
import { Sidebar } from './Sidebar'

import './Content.css'

export function Content(props) {
  const { imageUrl, goBackOneDay, goForwardOneDay, formattedDate, data } = props;

  return(
  <>
    <main className="content" >
      <div className="bg-img">
        <UserInfo></UserInfo>
        <Title goBackOneDay={goBackOneDay} goForwardOneDay={goForwardOneDay} formattedDate={formattedDate} imageUrl={imageUrl} data={data}></Title>
        <Sidebar data={data}></Sidebar>
      </div>
    </main>
  </>
  )
}
