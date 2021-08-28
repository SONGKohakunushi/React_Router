* Chapter 1. Route Basics
	1. Clarify the navigation area and display area in the interface
	1. Change the a tag in the navigation area to a Link tag
						<Link to="/xxxxx">Demo</Link>
	3. Register Route  tags in the display area to match the paths
						<Route path='/xxxx' component={Demo}/>
	4. <BrowserRouter> or <HashRouter> wrap <App>

* Chapter 2. general component and route component
	1. Write in different ways：
		* general component：<Demo/>
		* route component：<Route path="/demo" component={Demo}/>
	2. Different storage locations：
		* general component：components
		* route component：pages
	3. Receive different props
		* general component
		* route component:
			history:
				go: ƒ go(n)
				goBack: ƒ goBack()
				goForward: ƒ goForward()
				push: ƒ push(path, state)
				replace: ƒ replace(path, state)
			location:
				pathname: "/about"
				search: ""
				state: undefined
			match:
				params: {}
				path: "/about"
				url: "/about"

* Chapter 3. encapsulation NavLink -- MyNavLink

* Chapter 4. Switch

* Chapter 5. resolve style loss issues

* Chapter 6. exact match and ambiguous match

* Chapter 7. Redirect

* Chapter 8. nested routes
* Chapter 9. Pass parameters to route components
	1. params
	2. search
	3. state
		


* Chapter 12. Programmatically route navigate 
	* this.prosp.history.push()
	* this.prosp.history.replace()
	* this.prosp.history.goBack()
	* this.prosp.history.goForward()
	* this.prosp.history.go()

* Chapter 13. different between BrowserRouter from HashRouter
    1. The underlying principles are different.
		* BrowserRouter uses the history API of H5, which is not compatible with IE9 and below.
		* HashRouter uses the hash value of the URL.
	2. Path presentation is different
		* BrowserRouter's path does not contain #, e.g. localhost:3000/demo/test
		* HashRouter's path contains #, e.g.: localhost:3000/#/demo/test
	3. The effect on the route state parameter after updating
		* BrowserRouter has no effect, because the state is stored in the history object.
		* HashRouter will cause the loss of the route state parameter after updating
	4. HashRouter can be used to solve some path problems.
