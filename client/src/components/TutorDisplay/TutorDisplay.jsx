import React, { useContext } from 'react'
import './TutorDisplay.css'
import { TutorContext } from '../../../context/TutorContext'
import TutorItem from '../TutorItem/TutorItem'

const TutorDisplay = ({ category }) => {
    const { tutor_list } = useContext(TutorContext)
    const filteredTutors = category === "All" ? tutor_list : tutor_list.filter(tutor => tutor.category === category)

    return (
        <div className='tutor-display' id='tutor-display'>
            <h2>Top tutor near you</h2>
            <div className="tutor-display-list">
                {filteredTutors.map((item, index) => (
                    <TutorItem key={index} id={item._id} name={item.name} image={item.image} hour={item.hour} description={item.description} />
                ))}
            </div>
        </div>
    )
}

export default TutorDisplay;
