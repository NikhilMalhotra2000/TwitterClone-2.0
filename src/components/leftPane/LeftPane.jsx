import { NavLink} from 'react-router-dom'
import {home,explore,notifications,messages,bookmarks,lists,profile,twitter,more} from './icons'
import './leftPane.scss'


const LeftPane = () => {
return (
    <div className="left-pane">
    <div className="container">
      <header>{twitter}</header>
      <nav>
  <NavLink to="/Feed" exact activeClassName="selected"><span>{home}Home</span></NavLink>
  <NavLink to="/explore" activeClassName="selected"><span>{explore}Explore</span></NavLink>
  <NavLink to="/notifications" activeClassName="selected"><span>{notifications}Notifications</span></NavLink>
  <NavLink to="/messages" activeClassName="selected"><span>{messages}Messages</span></NavLink>
  <NavLink to="/bookmarks" activeClassName="selected"><span>{bookmarks}Bookmarks</span></NavLink>
  <NavLink to="/lists" activeClassName="selected"><span>{lists}Lists</span></NavLink>
  <NavLink to="/profile" activeClassName="selected"><span>{profile}Profile</span></NavLink>

<button className="more">
<span>{more}More</span>
</button>
  </nav>
 
  <button className="tweet">Tweet</button>

  <footer>
       <button className="account">
       <div className="photo">
           <img
            alt="user"
           src="https://images.unsplash.com/photo-1564582965527-7bd1bf2bf337?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyJTIwcGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
           />
       </div>
       <div>
           <div className="name">Tanya Garg</div>
           <div className="username">@tanyagarg14</div>
       </div>

       </button>

  </footer>
    </div>
    </div>
)
}

export default LeftPane
