## Switch
#### Register Route
import {Route,Switch} from 'react-router-dom'
	<Switch>
		<Route path="/about" component={About}/>
		<Route path="/home" component={Home}/>
		<Route path="/home" component={Test}/>
	</Switch>

* Normally a path corresponds to a component 
* If there are two different components corresponding to the same path
* path is /home, will select which both components to use 
* without <Switch>, even if the corresponding component is matched, it will continue to be matched indefinitely, wasting resources.
* What we want now is to stop matching the following components when a component is matched
