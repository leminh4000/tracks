import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        default :
            return state;
    }
};

const signup = dispatch => async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {
                email,
                password
            });
            await  AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', data: response.data.token});

            navigate('TrackList');
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
        }
    }


const signin = (dispatch) => {
    return ({email, password})=>{

    }
}

const signout = (dispatch) => {
    // TODO: implements

}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
);
