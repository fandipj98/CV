import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { TimelineConnector, TimelineDot } from '@material-ui/lab';

import "./CustomTimelineSeparator.css"

const CustomTimelineSeparator = (props) => {

    return (    
        <TimelineSeparator className="separator_padding">
            <TimelineDot variant="default" className="timeline_dot" />
            {props.isLast ? ('') : (
                <TimelineConnector />
            )}
        </TimelineSeparator>
    )
}

export default CustomTimelineSeparator;