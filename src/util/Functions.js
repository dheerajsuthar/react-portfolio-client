import {curry} from 'ramda';
export const trace = curry((tag, y) => {
    console.log(tag, y); return y;
});