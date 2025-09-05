import React from 'react';

const MainLayout = ({ children }) => {
    return(
        <div className="main-container min-h-screen w-screen text-center">
            {children}
        </div>
    );
};
export default MainLayout;