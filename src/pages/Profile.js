import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { curry, prop, compose, identity, head } from 'ramda';

const GET_PROFILE = gql`
    query($id:bigint!){
        profile(where:{id: {_eq:$id}}) {
        id
        name
        avatar
        bio
        created_at
        }
    }
`;

const Profile = ({ profiles }) => {
    const trace = curry((tag, y) => {
        console.log(tag, y); return y;
    })
    const name = compose(prop('name'), trace('debug'), head);

    return (<>
        <header>
            <h2>{name(profiles)}</h2>
        </header>
    </>);
};
const ProfileQuery = ({ match }) => {
    return (
        <Query query={GET_PROFILE} variables={{ id: parseInt(match.params.userId) }}>
            {
                ({ loading, error, data, client }) => {
                    if (loading) {
                        return (<div>Loading...</div>);
                    }
                    if (error) {
                        return (<div>Error! {JSON.stringify(error)}</div>);
                    }

                    return (<Profile
                        profiles={data.profile}
                        client={client}
                    />);
                }
            }
        </Query>
    );
};
export default ProfileQuery;