import IconTimelineSeparator from '../Timeline/IconTimelineSeparator';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import './ProfileTimeline.css';

function ProfileTimeline(props) {
    return (
        [props.data.map((item) => {
            return (
                <div key={item.id}>
                    <TimelineItem className={'timeline_item'}>
                        {item.id == props.data.length ? (
                            <IconTimelineSeparator icon={item.icon} last={true}/>
                        ) : (
                            <IconTimelineSeparator icon={item.icon}/>
                        )}
                        <TimelineContent className={'timeline_text_item'}>
                            {item.value}
                        </TimelineContent>
                    </TimelineItem>
                </div>
            );
        })]
    );
}

export default ProfileTimeline