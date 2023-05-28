import { useEffect, useRef, useState } from "react"

function Education() {

    const educationRef = useRef();

    const [educationDetail, setEducationDetail] = useState(
        [
            {
                degreeName: '',
                collageName: '',
                startingMonth: '',
                startingYear: '',
                endingMonth: '',
                endingYear: '',
                at: ""
            }
        ])

    const onChangeHandler = (e, index) => {
        const name = e.target.className.split(' ')
        const targetName = name[name.length - 1]
        const educationDetailDup = [...educationDetail]
        let changevalue = e.target.value
        educationDetailDup[index][targetName] = changevalue
        setEducationDetail([...educationDetailDup])
    }

    const editEducationHandler = (index) => {
        const educationDivs = document.querySelectorAll('.education')
        Array.from(educationDivs).map(educationDiv => educationDiv.classList.remove('openEditMode'))
        const selectedEducation = document.querySelectorAll('.education')[index]
        selectedEducation.classList.add('openEditMode')
    }

    const onContentEditing = (e, index) => {
        const name = e.target.className.split(' ')
        const targetName = name[name.length - 1]
        const educationDetailDup = [...educationDetail]
        const progDetail = e.target.value
        educationDetailDup[index][targetName] = progDetail
        setEducationDetail([...educationDetailDup])

        if (targetName === 'degreeName' | targetName === 'placeOfEducation') {
            const studyProgramDiv = document.querySelector(`.${targetName}`)
            studyProgramDiv.style.setProperty('--before-content', "''")
        }
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (educationRef.current && !educationRef.current.contains(event.target)) {
                const educationDivs = document.querySelectorAll('.education')
                Array.from(educationDivs).map(educationDiv => educationDiv.classList.remove('openEditMode'))
            }
        };
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // educationDetail.map((edu, index) => {
    //     if(edu.degreeName){
    //         const studyProgramDiv = document.querySelectorAll('.studyProgram')[index]
    //         studyProgramDiv.style.setProperty('--before-content', '')
    //         console.log(edu)
    //     }
    // })

    return (
        <div className='education_Container' ref={educationRef}>
            <h2 className='main_title'>EDUCATION</h2>
            {educationDetail.map((singleEducation, index) => (
                <div className='education' key={index} onClick={() => editEducationHandler(index)}>
                    <h3
                        className='studyProgram degreeName'
                        contentEditable='true'
                        suppressContentEditableWarning='true'
                        onInput={(e) => onContentEditing(e, index)}
                    >
                        {singleEducation.degreeName ? singleEducation.degreeName : ''}
                    </h3>
                    <p
                        className='placeOfEducation'
                        contentEditable='true'
                        suppressContentEditableWarning='true'
                        onInput={(e) => onContentEditing(e, index)}>
                        {singleEducation.collageName ? singleEducation.collageName : ""}
                    </p>
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
                            <input
                                placeholder='City Or Country'
                                className="at"
                                value={singleEducation.at}
                                contentEditable='false'
                                onChange={(e) => onChangeHandler(e, index)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education