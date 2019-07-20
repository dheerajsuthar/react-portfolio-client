import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { curry, prop, compose, identity, head, either, not, isEmpty } from 'ramda';
import { GET_PROFILE } from './queries';
import Loader from '../../graphql/Loader';
import Image from '../../core/components/ImageProfile';
import Editable from '../../core/components/Editable';
import { trace } from '../../util/Functions';

const Profile = ({ profiles }) => {

    const profile = compose(trace('debug'), head)(profiles);
    const emtpyTitle = _ => 'Profile with no name';
    const emtpyImage = _ => '';
    const emptyBio = _ => 'No bio yet';
    const name = either(prop('name'), emtpyTitle);
    const [bio, setBio] = compose(curry(useState), either(prop('bio'), emptyBio))(profile);
    const imgUrl = either(compose(prop('image_url'), prop('Avatar')), emtpyImage);
    return (<>
        <header>
            <Image src={imgUrl(profile)}></Image>
            <h2>{name(profile)}</h2>
            <Editable value={bio} onSave={(val) => setBio(val)} type="textarea"></Editable>


        </header>
    </>);
};
const ProfileQuery = ({ match }) => {
    return (
        <Query query={GET_PROFILE} variables={{ id: parseInt(match.params.userId) }}>
            {
                ({ loading, error, data, client }) => (
                    <Loader loading={loading} error={error}>
                        <Profile
                            profiles={data.profile}
                            client={client}
                        />
                    </Loader>
                )
            }
        </Query>
    );
};
export default ProfileQuery;