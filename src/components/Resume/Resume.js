
import IndividualLinks from '../IndividualLinks/IndividualLinks'
import './Resume.css'
import Education from '../Education/Education'

const Resume = ({ resume, linksUpdaterHandler }) => {

    return (
        <div className='Resume'>
            <div className='Resume_Header'>
                <div className='Personal_Detail'>
                    <h1>{resume.resumerName}</h1>
                    <h3>{resume.rollForApply}</h3>
                    <h4>{resume.tageLine}</h4>
                </div>
                <div className='Image'>

                </div>
            </div>

            {/* Personal Links */}

            <div className='Personal_Links' onClick={linksUpdaterHandler}>
                {Object.entries(resume.contactDetail).map(([key, value]) => (
                    value && !(key === 'address' | key === 'country') && (key === 'github' | key === 'linkedin' | key === 'instagram' | key === 'facebook' ?
                        <IndividualLinks info="brands" type={key} link={value.replace('https://www.', '')} key={key} /> :
                        <IndividualLinks info="solid" type={key} link={value} key={key} />)
                ))}
            </div>



            <div className='main_section'>
                <Education />
            </div>
        </div>
    )
}

export default Resume