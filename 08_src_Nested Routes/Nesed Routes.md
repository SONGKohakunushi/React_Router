## Nested Routes
        Secondary routes

        The navigation area and the display area have been added to the Home display area
        Adding News and Meaasge component to the display area
        So called secondary routing
        
        News and Message are both child components of Home and can be defined directly in the Home folder.
                News and Messages are static page
# Home
```
import MyNavLink from '../../components/MyNavLink'
import {Route,Switch,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'
// Route Link
<li>
        <MyNavLink to="/home/news">News</MyNavLink>
</li>
<li>
	<MyNavLink to="/home/message">Message</MyNavLink>
</li>
// register route
<Switch>
	<Route path="/home/news" component={News}/>
	<Route path="/home/message" component={Message}/>
	<Redirect to="/home/news"/>
</Switch>
```
* exact is turned on in App.jsx, an error will occur.
* meaning that all child routes under home are in error and cannot continue to match secondary routes