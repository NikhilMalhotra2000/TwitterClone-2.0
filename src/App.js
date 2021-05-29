import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {LeftPane} from './components'
import './App.scss'

const App= () =>{
  return (
    <BrowserRouter>
<div className="app">
<LeftPane />
<switch>
  <Route path="/Feed" exact>Home</Route> 
  <Route path="/explore" >Explore</Route> 
  <Route path="/notifications" exact>Notifications</Route> 
  <Route path="/messages" exact>Messages</Route> 
  <Route path="/bookmarks" exact>Bookmarks</Route> 
  <Route path="/lists" exact>Lists</Route> 
  <Route path="/profile" exact>Profile</Route> 

</switch>
<div className="right-pane">
  RightPane
</div>
     </div>
    </BrowserRouter>
    
  )
}

export default App;
