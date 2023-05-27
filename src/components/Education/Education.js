import { useState } from "react"

function Education() {

    const [educationDetail, setEducationDetail] = useState(
        [
            {
                degreeName: 'BSC Physics',
                collageName: 'Bhavans R A Collage Of Science',
                startingMonth: '',
                startingYear: '2018',
                endingMonth: '04',
                endingYear: '2022',
                at: "Anand"
            },
            {
                degreeName: '12th',
                collageName: 'D N High School',
                startingMonth: '04',
                startingYear: '2018',
                endingMonth: '04',
                endingYear: '2022',
                at: "Anand"
            }
        ])

    const onChangeHandler = (e, index) => {
        const name = e.target.className.split(' ')
        const targetName = name[name.length - 1]
        const educationDetailDup = [...educationDetail]
        let changevalue = e.target.value
        educationDetailDup[index].targetName = changevalue
        setEducationDetail([...educationDetailDup])
        console.log(targetName)
    }

    const onYearChangeHandler = (e, index) => {
        const input = document.querySelectorAll('.startingYear')
        const educationDetailDup = [...educationDetail]
        let changedvalue = e.target.value
        educationDetailDup[index].startingYear = changedvalue
        setEducationDetail([...educationDetailDup])
    }

    const editEducationHandler = (index) => {
        console.log(educationDetail[index].startingMonth)
    }

    console.log(educationDetail)

    return (
        <div className='education_Container'>
            <h2 className='main_title'>EDUCATION</h2>
            {educationDetail.map((singleEducation, index) => (
                <div className='education' onClick={() => editEducationHandler(index)}>
                    <h3 className='studyProgram'>{singleEducation.degreeName}</h3>
                    <p className='placeOfEducation'>{singleEducation.collageName}</p>
                    <div>
                        <div className='education_dates'>
                            <input
                                placeholder='mm'
                                className='programDate day startingMonth'
                                maxLength='2'
                                value={singleEducation.startingMonth}
                                onChange={(e) => onChangeHandler(e, index)} />

                            <span className='date_span'>/</span>

                            <input
                                placeholder='yyyy'
                                className='programDate startingYear'
                                maxLength='4'
                                value={singleEducation.startingYear}
                                onChange={(e) => onChangeHandler(e, index)} />

                            <span className='date_span'>-</span>

                            <input
                                placeholder='mm'
                                className='programDate day endingMonth'
                                maxLength='2'
                                value={singleEducation.endingMonth}
                                onChange={(e) => onChangeHandler(e, index)} />

                            <span className='date_span'>/</span>

                            <input
                                placeholder='yyyy'
                                className='programDate endingYear'
                                maxLength='4'
                                value={singleEducation.endingYear}
                                onChange={(e) => onChangeHandler(e, index)} />
                        </div>
                        <div className='cityOfProgram'>
                            <input placeholder='City,Country or GPA(Optional)' value={singleEducation.at} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education