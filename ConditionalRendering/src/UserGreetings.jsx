import ReactPropTypes from "prop-types"
function UserGreetings(props){
    if(props.isLoggedIn){
        return(
            <h2>Welcome {props.username}</h2>
        )
    }
    else{
        return(
            <h2>Not Welcome</h2>
        )
    }
}

UserGreetings.prototype ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.strings,
}

UserGreetings.defaultProps ={
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreetings