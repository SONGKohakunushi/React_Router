# React路由

###  SPA
* single page web application SPA
* Only one page for the whole application
* Clicking on a link in the page "does not update the page", "only partial updates to the page", partial updates to switch between different content are displayed by different components
* Data is fetched via AJAX requests and displayed asyncon the front end
       
        If you apply the "route technique", you only show the different components, if you want to show the server data
        you need to send a request to contact the server when the component DidMount and have the server pass the data to
        The parts used for "navigation" and "display switching"
        
        ** The SPA application developed is indeed a single page, but the multi-component **

#### Route
* How front-end route works: the path of the browser is relied on the path is modified by clicking on the navigation area, and then the path modification is monitored
* The path is then matched and the corresponding component is displayed
        
* Route is a mapping relationship: each path corresponds to a mapped component (key: value)
* key is a path, value is a component 

#### Front-end routing
* Browser-side route, value is component, used to display page content
* Registering a route: <Route path="/test" component={Test}>
* Process: When the browser path changes to /test,the current route componentbecomes the Test  component
* How the browser's path changes, triggering a path change when the navigation bar link is clicked
* A path without a .html suffix is a test component 



### How route works
How front-end route is detected
* Front-end route also relies on the browser's history,
* But the BOM's native API is not very useful, so we use history.js
* The BOM object has a history property to manage the browser path and history
* history.js
let history = History.createBrowserHistory()  
<script type="text/javascript" src="https://cdn.bootcss.com/history/4.7.2/history.js"></script>
        
* adds a piece of data to the history record
        history.push() 

* Detection of paths
        history.listen((location) => {
		console.log('The request route path has changed', location)
	})  

* history two modes of operation
1. HTML5 native API   .history
   let history = History.createBrowserHistory() 
2. hash  After the path have a #/
   let history = History.createHashHistory()    
        
#### react-router (react-router-dom) 
* a plugin library for react
* implement an SPA application
                
                three implementations, for three platforms: 1. Web 2. native 3. anywhere
                react-router-dom for Web

                Built-in components
                        <BrowserRouter>
                        <HashRouter>
                        <Route>
                        <Redirect>
                        <Link>
                        <NavLink>
                        <Switch>
                others
                        history对象
                        match对象
                        withRouter函数



