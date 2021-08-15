import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './CustomTimeline.css';

function CustomTimeline(props) {
    return (
        <Timeline className={'timeline'}>
            {/* Item Header */}
            <TimelineItem className={'timeline_header'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'}>{props.icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6 className={'timeline_text_header'}>{props.title}</h6></TimelineContent>
            </TimelineItem>
            
            {props.children}
        </Timeline>
    );
}

export default CustomTimeline