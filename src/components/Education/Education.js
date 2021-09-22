import EducationData from '../../data/EducationData';
import CustomTimeline from '../Timeline/CustomTimeline';
import EducationTimeline from './EducationTimeline';

import './Education.css';

function Education() {
    return (
        <div className="education_container">
            <CustomTimeline icon={EducationData.icon} title={EducationData.title} style="component_text_header">
                <EducationTimeline data={EducationData.data}/>
            </CustomTimeline>
        </div>
    );
}

export default Education;