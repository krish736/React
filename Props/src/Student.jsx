import PropTypes from 'prop-types'
import styles from './Student.module.css'
function Student(props){
    return(
        <div className={styles.student}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "YES" : "NO"}</p>
        </div>
    )
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps ={
    name: "guest",
    age: 0,
    isStudent: false,
}
export default Student
