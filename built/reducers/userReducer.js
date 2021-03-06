import * as ActionTypes from "../actions/types";
const initialState = {
    isLoginedIn: false,
    user: {},
    status: null
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                isLoginedIn: true,
                user: action.user,
                status: 'done'
            };
    }
}
