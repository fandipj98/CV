import IconTimelineSeparator from '../Timeline/IconTimelineSeparator';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import './ProfileTimeline.css';

function ProfileTimeline(props) {
    return (
        props.data.map((items) => {
            return (
                <div key={items.id}>
                    <TimelineItem className="timeline_item">
                        {items.id === props.data.length ? (
                            <IconTimelineSeparator icon={items.icon} isLast={true}/>
                        ) : (
                            <IconTimelineSeparator icon={items.icon}/>
                        )}
                        <TimelineContent className="timeline_text_item">
                            {items.value}
                        </TimelineContent>
                    </TimelineItem>
                </div>
            );
        })
    );
}

export default ProfileTimeline;