import React from 'react';

// MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import InlineIconText from '../InlineIconText';

// Icons
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function ProfileData(props) {
    const { profileData } = props;
    return (
        <div className="profile-user-column">
            <Avatar src={profileData.avatarUrl} className="user-avatar-profile" />
            {profileData.name && (
                <Typography variant="h5" color="primary">
                    {profileData.name}
                </Typography>
            )}
            <Typography variant="subtitle2" gutterBottom>
                @{profileData.username}
            </Typography>
            {profileData.bio && (
                <Typography variant="body2" style={{ textAlign: 'justify' }}>
                    {profileData.bio}
                </Typography>
            )}
            <br />
            <Typography variant="subtitle2">
                {profileData.followers} followers.
                {profileData.following} following.
            </Typography>
            <Typography variant="subtitle2">
                {profileData.publicRepos} public repositories.
                {profileData.publicGists} public gists.
            </Typography>
            <br />
            {profileData.company && (
                <Typography variant="subtitle2" gutterBottom>
                    <InlineIconText icon={LocationCityIcon} text={profileData.company} />
                </Typography>
            )}
            {profileData.location && (
                <Typography variant="subtitle2">
                    <InlineIconText icon={LocationOnIcon} text={profileData.location} />
                </Typography>
            )}
            {profileData.blog && (
                <Typography variant="subtitle2">
                    <InlineIconText icon={LanguageIcon} text={profileData.blog} />
                </Typography>
            )}
            {profileData.email && (
                <Typography variant="subtitle2">
                    <InlineIconText icon={MailOutlineIcon} text={profileData.email} />
                </Typography>
            )}
        </div>
    );
}
