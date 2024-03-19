import ProfilePic from './assets/imresizer-1710852821101.jpg'
function Cards(){
    return(
        <div className="cards">
            <img className='cards-img' src={ProfilePic} alt="" />
            <h2 className='cards-title'>Krish</h2>
            <p className='cards-text'>This is card that is build using react</p>
        </div>
    )
}

export default Cards