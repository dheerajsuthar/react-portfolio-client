import React from 'react';
export default ({ loading, error, data, client, children }) => {
    if (loading) {
        return (<div>Loading...</div>);
    }
    if (error) {
        return (<div>Error! {JSON.stringify(error)}</div>);
    }

    return children;
}