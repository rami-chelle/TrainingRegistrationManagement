import axios from 'axios';

const initialState = {
 
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SubmitInfo':
            axios.post('http://localhost:8111/api/v1/auth/register ')
            return state;

    default :
        return state;
    }
}

export default reducer;