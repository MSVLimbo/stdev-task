import type {GeneralState} from './types';

const initialState: GeneralState = {
    profile: null,
    loading: true,
    postList: {
        count: 0,
        next: null,
        previous: null,
        results:[]
    }
};

export default initialState;
