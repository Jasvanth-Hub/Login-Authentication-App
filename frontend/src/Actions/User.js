import axios from 'axios';
const BASE_URL = 'https://login-authentication-app.onrender.com/api/v1/user';


export const loginUser = (email, password,showAlert) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest",
        });

        const response = await axios.post(
            `${BASE_URL}/login`,
            { email, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                validateStatus: function (status) {
                    return status < 500;
                },
            }
        );

        if (response.status === 200) {
            dispatch({
                type: "LoginSuccess",
                payload: response.data,
            });
            showAlert(response.data.message)
        } else if (response.status === 400) {
            dispatch({
                type: "LoginError",
                payload: response.data,
            });
            showAlert(response.data.message)
        }
    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.message,
        });
        showAlert(error.message)
    }
};



export const loadUser = (showAlert) => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest"
        })

        const response = await axios.get(`${BASE_URL}/myprofile`, {
            validateStatus: function (status) {
                return status < 500;
            },
        })

        if (response.status === 200) {
            dispatch({
                type: "LoadUserSuccess",
                payload: response.data
            })

        } else if (response.status === 400) {
            dispatch({
                type: "LoadUserError",
                payload: response.data,
            });
            showAlert(response.data.message)
        }

    } catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.message
        })
        showAlert("Please Login ..")
    }
}


export const registerUser = (name, email, password, avatar,showAlert) => async (dispatch) => {
    try {

        dispatch({
            type: "RegisterRequest"
        })

        const response = await axios.post(`${BASE_URL}/register`, { name, email, password, avatar }, {
            headers: {
                'Content-Type': 'application/json'
            },
            validateStatus: function (status) {
                return status < 500;
            },
        })
        if (response.status === 200) {
            dispatch({
                type: "RegisterSuccess",
                payload: response.data
            })
            showAlert(response.data.message)
        } else if (response.status === 400) {
            dispatch({
                type: "RegisterError",
                payload: response.data,
            });
            showAlert(response.data.message)
        }
    } catch (error) {
        dispatch({
            type: "RegisterFailure",
            payload: error.message
        });
    }
}

export const UpdateUser = (name, email, avatar,showAlert) => async (dispatch) => {
    try {

        dispatch({
            type: "UpdateUserRequest"
        })

        const { data } = await axios.put(`${BASE_URL}/updateprofile`, { name, email, avatar }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        dispatch({
            type: "UpdateUserSuccess",
            payload: data
        })
        showAlert(data.message)

    } catch (error) {
        dispatch({
            type: "UpdateUserFailure",
            payload: error.message
        });
        showAlert(error.message)
    }
}

export const UpdatePassword = (oldPassword, newPassword,showAlert) => async (dispatch) => {
    try {

        dispatch({
            type: "UpdatePasswordRequest"
        })

        const response = await axios.put(`${BASE_URL}/updatepassword`, { oldPassword, newPassword }, {
            headers: {
                'Content-Type': 'application/json'
            },validateStatus: function (status) {
                return status < 500;
            }
        })

        if (response.status === 200) {
            dispatch({
                type: "UpdatePasswordSuccess",
                payload: response.data
            })
            showAlert(response.data.message)
        } else if (response.status === 400) {
            dispatch({
                type: "UpdatePasswordError",
                payload: response.data,
            });
            showAlert(response.data.message)
        }
    } catch (error) {
        dispatch({
            type: "UpdatePasswordFailure",
            payload: error.message
        })
        showAlert(error.message)
    }
}


export const logoutUser = (showAlert) => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutUserRequest",
        });

        const { data } = await axios.get(`${BASE_URL}/logout`);

        dispatch({
            type: "LogoutUserSuccess",
            payload: data
        });
        showAlert(data.message)
    } catch (error) {
        dispatch({
            type: "LogoutUserFailure",
            payload: error.message
        });
        showAlert(error.message)
    }
};


export const deleteMyProfile = (showAlert) => async (dispatch) => {
    try {
        dispatch({
            type: "DeleteProfileRequest",
        });

        const { data } = await axios.delete(`${BASE_URL}/deleteaccount`);

        dispatch({
            type: "DeleteProfileSuccess",
            payload: data,
        });
        showAlert(data.message)
    } catch (error) {
        dispatch({
            type: "DeleteProfileFailure",
            payload: error.message,
        });
        showAlert("Account deleted ..")
    }
};
