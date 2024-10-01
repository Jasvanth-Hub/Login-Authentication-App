import "./UpdatePassword.css";
import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { UpdatePassword } from "../../Actions/User";


const UpdateUserPassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const dispatch = useDispatch();

    
    
    const submitHandler =  (e) => {
        e.preventDefault();
         dispatch(UpdatePassword(oldPassword, newPassword));
    };


    return (
        <>
            <div className="updatePassword">
                <form className="updatePasswordForm" onSubmit={submitHandler}>
                    <Typography variant="h4" style={{ padding: "2vmax" }}>
                        Update Password
                    </Typography>

                    <input
                        type="password"
                        placeholder="Old Password"
                        required
                        value={oldPassword}
                        className="updatePasswordInputs"
                        onChange={(e) => setOldPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="New Password"
                        required
                        className="updatePasswordInputs"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <Button type="submit" >
                        Change Password
                    </Button>
                </form>
            </div>
            <footer><Typography variant='h6' >Developed by Jasvanth || copyright&copy; 2024 || All rights received.</Typography></footer>

        </>
    );
};

export default UpdateUserPassword;