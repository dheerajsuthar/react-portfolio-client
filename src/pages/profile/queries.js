import gql from 'graphql-tag';

export const GET_PROFILE = gql`
    query($id:bigint!){
        profile(where:{id: {_eq:$id}}) {
        id
        name
        Avatar{
            image_url
        }
        bio
        created_at
        }
    }
`;

export const UPDATE_BIO = gql`
mutation ($id: bigint!, $bio: String!) {
  update_profile(where: {id: {_eq: $id}}, _set: {bio: $bio}) {
    affected_rows
  }
}`;