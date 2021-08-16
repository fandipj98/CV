import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './IconTimelineSeparator.css';

function IconTimelineSeparator(props) {
    return(
        <TimelineSeparator className="separator_padding">
            <TimelineDot variant="default" className="timeline_dot">{props.icon}</TimelineDot>
            {props.isLast ? ('') : (
                <TimelineConnector />
            )}
        </TimelineSeparator>
    );
}

export default IconTimelineSeparator;