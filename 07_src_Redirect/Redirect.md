## Redirect
    When the page is first opened, there is one in the navigation bar that is checked by default
```
{/* register route */}
<Switch>
	<Route path="/about" component={About}/>
	<Route path="/home" component={Home}/>
	<Redirect to="/about"/>
</Switch>
````	
	Generally redirect at the bottom of all route registrations, when all routes fail to match, jump to the route specified by Redirect

				
