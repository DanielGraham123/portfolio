
// loading spinner
import React from 'react';

const Loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-slate-800 border-t-slate-500 rounded-full animate-spin-fast"></div>
        </div>
    );
}

export default Loading;