## encapsulation NavLink -- MyLink
* If the page consists of a lot of navigation links, write a lot of activeClassName styles
* Navigation content repeats a lot of code, so there is room for optimization
* Wrap <NavLink>
* define a component called <MyNavLink> that you can then use as a route link
* The only thing you need to write inside is something different from the other route links

```
<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
```
<NavLink> --> <MyNavLink>
```
<MyNavLink to="/about">About</MyNavLink>
<MyNavLink to="/home">Home</MyNavLink>
```
<MyNavLink>---general component
        
# MyNavLink
import {NavLink} from 'react-router-dom'
render() {
	return (                                        
                                                    to={this.props}-->{...this.props}
		<NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
	)
}

### App.jsx  
import MyNavLink from './components/MyNavLink'
<div>
	<MyNavLink to="/about">About</MyNavLink>
	<MyNavLink to="/home">Home</MyNavLink>
</div>

{... .this.props}
* .props gets not only the tag properties but also the tag body content this.props.children is About or Home  
* The properties inside the tag can be picked up using .props
* The tag body content is also a special tag attribute, and About is a special tag attribute that can also help you collect
* You can write your own tag attribute with key = "value" but the key of the tag body is children and the content of the tag body is value
* 
<NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
