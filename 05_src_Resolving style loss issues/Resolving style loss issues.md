## Resolving style loss issues

add  /atguigu/about  to the URL path becomes a multi-level path
<MyNavLink to="/atguigu/about">About</MyNavLink>
<MyNavLink to="/atguigu/home">Home</MyNavLink>
                                   									
<Route path="/atguigu/about" component={About}/>
<Route path="/atguigu/home" component={Home}/>

#### update page, style loss
* we can add path when we register route and route link
		<MyNavLink to="/atguigu/about">About</MyNavLink>
		<MyNavLink to="/atguigu/home">Home</MyNavLink>        	
          
		<Switch>
			<Route path="/atguigu/about" component={About}/>
			<Route path="/atguigu/home" component={Home}/>
		</Switch>
          when u update page, F12 - Network we can see the request path of bootstrap is changed
          ===>  http://localhost:3000/atguigu/css/bootstrap.css
        /atguigu will be part of path, so So there will be a path error

* Route paths are multi-level structures and when they are updated, the style is lost
* The reason for the loss is that the /atguigu path in the multi-level path is also the part of path
## Resolve this problem
1. public/index.html        ./ -> / 
     <link rel="stylesheet" href="/css/bootstrap.css">

2. public/index.html      %PUBLIC_URL%    Absolute path
     <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">
               
3. index.js    HashRouter
                    <HashRouter>
		                <App/>
	               </HashRouter>