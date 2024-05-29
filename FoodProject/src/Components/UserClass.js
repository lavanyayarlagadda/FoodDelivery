import React from "react";

class UserDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           founder:2,
           coFounder:1
        }
    }
    render(){
        const {name,location,contact} = this.props;
        const {founder,coFounder} = this.state
        return (
            <>
            <h1>{founder}</h1>
            <button onClick={()=>{
                this.setState({
                    founder:founder+2
                })
            }}>Increase By Two</button>
            <h2>{coFounder}</h2>
            <button  onClick={()=>{
                this.setState({
                    coFounder:coFounder+1
                })
            }}>Increase By One</button>
            <h1>Name:{name}</h1>
            <h3>Loaction:{location}</h3>
            <h5>Contact:{contact}</h5>
            </>
        )
    }
}
export default UserDetails