import { useEffect, useReducer } from "react";
import axios from "axios"

// user component using useReducer
const ACTIONS = {
    CALL_API: 'call-api',
    SUCCESS: 'success',
    ERROR: 'error',
};

const userDetailsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CALL_API: {
            return {
                ...state,
                loading: true,
            };
        }
        case ACTIONS.SUCCESS: {
            return {
                ...state,
                loading: false,
                userDetails: action.data,
            };
        }
        case ACTIONS.ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        default:
    }
};

const initialState = {
    userDetails: '',
    loading: false,
    error: null,
};

const User = () => {
    const [state, dispatch] = useReducer(userDetailsReducer, initialState);
    const { userDetails, loading, error } = state;

    useEffect(() => {
        dispatch({ type: ACTIONS.CALL_API });
        const getUsers = async () => {
            let response = await axios.get('https://fakestoreapi.com/products');
            if (response.status === 200) {
                dispatch({ type: ACTIONS.SUCCESS, data: response.data });
                return;
            }
            dispatch({ type: ACTIONS.ERROR, error: response.error });
        };

        getUsers();
    });

    return (
        <div>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {userDetails.map((user) => (
                        <li key={user.id}>
                            <h1>{user.title}</h1>
                            {/* <p>{user.location}</p> */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default User;