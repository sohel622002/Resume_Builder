import './header.css'

function Header(props) {
  return (
    <div className='header'>
      <h2>ResumeBuilder</h2>
      <div className='headerFunc'>
        <div className='font'>Font</div>
        <div className='addBtn' onClick={props.opneEditModel}>Add</div>
      </div>
      <button className='download_btn'>Download</button>
    </div>
  )
}

export default Header