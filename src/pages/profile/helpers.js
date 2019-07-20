import {graphql} from 'react-apollo';
import {GET_PROFILE} from './queries';

export const getProfile = graphql(GET_PROFILE)