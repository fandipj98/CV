import Foto from '../../assets/images/FandiPJ.jpg';
import CustomTimeline from '../Timeline/CustomTimeline';
import ProfileTimeline from './ProfileTimeline';
import Contact from '../../data/Contact';

import ContactsIcon from '@material-ui/icons/Contacts';

import './Profile.css';

function Profile() {
    return (
        <div className="profile container_shadow">
            <div className="profile_image_container">
                <img src={Foto} className="profile_image" alt="foto"/>
            </div>

            <div className="profile_information">
                <CustomTimeline icon={<ContactsIcon />} title={'Contact'}>
                    <ProfileTimeline data={Contact}/>
                </CustomTimeline>
            </div>
        </div>
    );
}

export default Profile