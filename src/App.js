import './App.css';
import Header from './components/Header/header';
import Resume from './components/Resume/Resume';
import Sidebar from './components/Sidebar/Sidebar';

import { useState } from 'react'

function App() {
  const [open, setOpan] = useState(false)

  const [resumeDate, setResumeData] = useState({
    resumerName: "sohel Shaikh",
    rollForApply: "FrontEnd Devloper",
    tageLine: "Self Taught Devloper",
    profileImageUrl: '',
    contactDetail: {
      "envelope" : "sohelshaikh01231@gmail.com",
      "mobile-screen-button" : 8488821801,
      "location-dot" : "Ahmedabad",
      "linkedin" : 'https://www.linkedin.com/in/sohel-shaikh-0a520b191',
      "github" : 'https://www.github.com/sohel622002',
      "instagram" : '',
      "facebook" : '',
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

  const openFunctionality = () => {
    setOpan(!open)

    if (!open) {
      const plusIcon = document.querySelector('.fa-plus')
      plusIcon.style.transform = "rotate(45deg)"
    } else {
      const plusIcon = document.querySelector('.fa-plus')
      plusIcon.style.transform = "rotate(0deg)"
    }
  }

  const linksUpdaterHandler = () => {
    console.log('Open Links')
  }

  
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar openFunctionality={openFunctionality} />
        <Resume resume={resumeDate} linksUpdaterHandler={linksUpdaterHandler} />
      </div>
    </div>
  );
}

export default App;
