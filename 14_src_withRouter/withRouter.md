## withRouter
#### News
* After the News component is mounted, wait 2 or 3 seconds to jump to the message component.
* In the News component,  you can use componentDidMount()
``` 
    componentDidMount(){
		setTimeout(()=>{
			this.props.history.push('/home/message')
		},2000)
	}  
```

#### Header    
* If you now want to put the forward and back buttons in the header file
* Put the forward and back buttons in the Header component
* define the back forward and go methods
* If you use .history.goBack(), you will get an error
* because only route components can use .history but Header is a normal component
* In this case, you need to use withRouter

            import {withRouter} from 'react-router-dom'

            export default class Header extends Component {}
            ====> 
            class Header extends Component {}
            ......
            export default withRouter(Header)


withRouter()
* solve the problem of using the route component API in general components
* The return value is a new component

#### different between BrowserRouter from HashRouter
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
