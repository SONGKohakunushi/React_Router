78. Route Component and General Component
		Details
            1. browsers do not recognize <Link>, so <Link> will be converted to <a> tags in browsers
            2. <BrowserRouter>    <HashRouter> pages will be addressed as /#/home
        
        Component classification
                Routing components,    general components
* General components <Home/> General components are placed in the components folder
* Routing component <Route path="/home" component={Home}/> Home by route match
Routing components are placed in the Pages folder as standard
                 
in the project: Header is general component, About and Home are Route components

## Differences between routing components and general components
			1. Different writing styles.
				General component: <Demo/>
				Routing component: <Route path="/demo" component={Demo}/>
			2. Different location.
				General components: components
				Routing components: pages
			3. The received props are different.
				General components
				routed components: receive three fixed properties 

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


### NavLink
* If the route link needs to be highlighted, or if a style class name is dynamically appended when the route link is clicked
```
<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
```
<NavLink>  If you want to add some highlighted attributes, 
			so add a class name activeClassName="atguigu"
        
#### sometimes we don't use bootstrap, even if we use bootstrap we want to change the style?
#### you can add the style of the aituigu class directly to index.html in public (you can also create a new App.css)
<style>
	.atguigu{
		background-color: rgb(209, 137, 4) !important;
		color: white !important;
		// set the highest permissions in the styles => !important
	}
</style>