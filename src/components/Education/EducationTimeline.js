import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomTimelineSeparator from '../Timeline/CustomTimelineSeparator';

import './EducationTimeline.css';

function EducationTimeline(props) {

    const checkDetails = (items) => {
        if (items.name === "Institut Teknologi Sepuluh Nopember") {
            return (
                <div className="education_timeline_item">
                    <h6 className="education_department">{items.department}</h6>    
                    <h6 className="education_gpa">GPA: <span>{items.gpa}</span></h6> 
                </div>
            );
        }
    }

    return (
        props.data.map((items) => {
            return (
                <div key={items.id}>
                    <TimelineItem className="education_timeline_item">
                        {items.id === props.data.length ? (
                            <CustomTimelineSeparator isLast={true} />
                        ) : (
                            <CustomTimelineSeparator />
                        )}
                        <TimelineContent className="education_timeline_text_item">
                            <h6 className="education_timeline_text_item"> <span>{items.name}</span> | {items.year} </h6>
                            <h6 className="education_timeline_text_item"> {checkDetails(items)} </h6>
                        </TimelineContent>
                    </TimelineItem>
                </div>
            );
        })
    );
}

export default EducationTimeline;