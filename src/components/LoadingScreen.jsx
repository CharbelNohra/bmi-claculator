import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <CircularProgress size={60} />
            <h2>Loading...</h2>
        </div>
    );
}

export default LoadingScreen;