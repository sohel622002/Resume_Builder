
import IndividualLinks from '../IndividualLinks/IndividualLinks'
import './Resume.css'
import Education from '../Education/Education'

const Resume = ({ resume, linksUpdaterHandler }) => {

    return (
        <div className='Resume'>
            <div className='Resume_Header'>
                <div className='Personal_Detail'>
                    <h1>{resume.resumerName}</h1>
                    <h3>Frontend Developer</h3>
                    <h4>Selftaught Developer</h4>
                </div>
                <div className='Image'>

                </div>
            </div>

            {/* Personal Links */}

            <div className='Personal_Links' onClick={linksUpdaterHandler}>
                {Object.entries(resume.contactDetail).map(([key, value]) => (
                    value && (key === 'github' | key === 'linkedin' | key === 'instagram' | key === 'facebook' ?
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