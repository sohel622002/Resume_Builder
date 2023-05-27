
function IndividualLinks(props) {
  return (
    <div className='Individual_links'><i className={"fa-"+props.info + " fa-" + props.type} /><a href={props.link}>{props.link}</a></div>
  )
}

export default IndividualLinks