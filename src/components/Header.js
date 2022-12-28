import './Header.css'
function Header({setinputstate}){
return(
    <div className='Header'>
        <div className='app-name'>Task Tracker</div>
        <button onClick={setinputstate}>Add</button>
    </div>
)
}
export default Header;