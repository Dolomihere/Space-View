import { Title } from './Title'
import { UserInfo } from './UserInfo';

import './Content.css'

export function Content(props) {
  const { imageUrl } = props;

  return(
  <>
    <main className="bg-img">
      <div className="content">
        <UserInfo></UserInfo>
        <Title></Title>
      </div>
    </main>
  </>
  )
}
