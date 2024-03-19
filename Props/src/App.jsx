import Student from "./Student"

function App(){
  return(
    <>
    <Student name="Krish" age={20} isStudent={true}/>
    <Student name="Krishna" age={21} isStudent={false}/>
    <Student/>
    </>
  )
}

export default App