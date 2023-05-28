import './App.css';
import Header from './components/Header/header';
import LinkModel from './components/Model For Links/LinkModel';
import Resume from './components/Resume/Resume';

import { useState } from 'react'

function App() {
  const [open, setOpan] = useState(false)
  const [openModel, setOpenModel] = useState(false)
  const [addModel, setAddModel] = useState(false)

  const [resumeDate, setResumeData] = useState({
    resumerName: "sohel Shaikh",
    rollForApply: "FrontEnd Devloper",
    tageLine: "Self Taught Devloper",
    profileImageUrl: '',
    contactDetail: {
      "envelope": "sohelshaikh01231@gmail.com",
      "mobile-screen-button": 8488821801,
      "location-dot": "Ahmedabad",
      "linkedin": 'https://www.linkedin.com/in/sohel-shaikh-0a520b191',
      "github": 'https://www.github.com/sohel622002',
      "instagram": '',
      "facebook": '',
      "country" : '',
      "address" : ''
    },
    Education: [
      {
        degreeName: 'BSC',
        collageName: 'D N High School',
        startingDate: '',
        endingDate: '',
        at: "Ahmedabad"
      }
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    languages: [
      {
        lang: "English",
        Proficiency: "Professional working Proficiency"
      },
      {
        lang: "Hindi",
        Proficiency: "Full Professional Proficiency"
      }
    ],
    PersonalProjects: [
      {
        projectName: "Zyklo",
        projectDetail: [
          "link for github",
          "teach Used",
          "web App",
        ]
      }
    ],
    workExp: [
      {
        TilePosition: '',
        company: '',
        at: '',
        startingDate: '',
        LastDate: '',
        smallDisc: ''
      }
    ],
    achievements: [
      {
        achievementName: '',
        description: ''
      }
    ]
  })

  const linksUpdaterHandler = () => {
    setOpenModel(true)
  }

  const openModelCloserHandler = (e) => {
    const backDrop = document.querySelector('.backDrop')
    if (e.target === backDrop) {
      setOpenModel(false)
      setAddModel(false)
    }
  }

  const showSocialLinks = () => {
    const element = document.querySelector('.sociallink_container')
    element.style.setProperty('--before-left', `50%`)
  }

  const showMainLinks = () => {
    const element = document.querySelector('.sociallink_container')
    element.style.setProperty('--before-left', `0%`)
  }

  const opneEditModel = () => {
    setAddModel(true)
  }

  const reciveMainLinks = (mainLinksState) => {
    const linkState = mainLinksState
    const resumeDataCopy = {...resumeDate}
    resumeDataCopy.contactDetail.envelope = mainLinksState.email
    resumeDataCopy.contactDetail['location-dot'] = mainLinksState.city
    resumeDataCopy.contactDetail['mobile-screen-button'] = mainLinksState.phone
    resumeDataCopy.contactDetail.country = mainLinksState.country
    resumeDataCopy.contactDetail.address = mainLinksState.address
    resumeDataCopy.resumerName = mainLinksState.name
    resumeDataCopy.rollForApply = mainLinksState.role
    resumeDataCopy.tageLine = mainLinksState.line
    setResumeData(resumeDataCopy)
    setOpenModel(false)
  }

  return (
    <div className="App">
      {openModel &&
        <LinkModel
          openModelCloserHandler={(e) => openModelCloserHandler(e)}
          onDiscardClick={() => setOpenModel(!openModel)}
          showSocialLinks={showSocialLinks}
          showMainLinks={showMainLinks} 
          reciveMainLinks={reciveMainLinks}
          resume={resumeDate}/>
      }
      {addModel && <div className='backDrop' onClick={(e) => openModelCloserHandler(e)}>
        <div className='model'>
          <div className='component_container'>

          </div>
        </div>
      </div>
      }
      <Header opneEditModel={opneEditModel} />
      <div className='main'>
        <Resume resume={resumeDate} linksUpdaterHandler={linksUpdaterHandler} />
      </div>
    </div>
  );
}

export default App;
