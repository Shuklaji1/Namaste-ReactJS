import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count1: 0
        }
    }
    
    render(){
        const{name, location, userhandle} = this.props;
        const{count, count1} = this.state;
        const handleclick = () => {
            return(
                this.setState(
                    {
                        count: this.state.count + 1,
                        count1: this.state.count1 + 2,
                    }
                )
            )
        }
        return(
            <div className="user-card">
                <button onClick={handleclick}><h1> Count = {count}</h1></button>
                <h1> Count_1 = {count1} </h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {userhandle}</h4>
            </div>
        );
    }
}

export default UserClass;