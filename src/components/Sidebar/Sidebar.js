import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className='sidebar' onClick={props.openFunctionality}>
            <div className='Add_Btn'><i className="fa-regular fa-plus" /><p>Add</p></div>
        </div>
    )
}

export default Sidebar