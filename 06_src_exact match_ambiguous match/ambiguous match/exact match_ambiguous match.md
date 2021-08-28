## exact match and ambiguous match 

        {/* route link */}
				<MyNavLink to="/about">About</MyNavLink>
				<MyNavLink to="/home">Home</MyNavLink>
        {/* register route */}
				<Switch>
					<Route exact path="/about" component={About}/>
					<Route exact path="/home" component={Home}/>
				</Switch>
		/about and /about  /home and /home  match

        if register route, path have been changed
        			<Route exact path="/home/a/b" component={Home}/>
        can't match

        when Route Link, path is "/home/a/b"
        		<MyNavLink to="/home/a/b">Home</MyNavLink>
		can mathch, Because /home/a/b contains the /home in the registered route can be executed
        
        When registering a route exact = {true} or exact turns on exact match
								<Switch>
									<Route exact path="/about" component={About}/>
									<Route exact path="/home" component={Home}/>
								</Switch> 

## exact match and ambiguous match 
				1. ambiguout match is used by default
				2. exact match: <Route exact={true} path="/about" component={About}/>
                    When registering a route exact = {true} turns on exact matching
				3. sometimes exact match will make problem in matching secondary routes
**normally do not need to turn on exact match, it happen problems due to ambiguous match problems**
