import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div className=''>
            <h2 className="text-4xl font-semibold text-center mb-5">Github Contributions</h2>
            <div className='flex justify-center items-center md:flex-row flex-col'>
                <div className='w-full md:w-1/2 px-10 md:px-0 flex flex-col items-center justify-center'>
                    <h2 className="text-3xl font-semibold text-center mb-3 text-fuchsia-500">Murad</h2>
                    <GitHubCalendar blockMargin={1} blockSize={10} username='vanhellsing102'></GitHubCalendar>
                </div>
                <div className='w-full md:w-1/2 px-10 md:px-0 flex flex-col items-center justify-center'>
                    <h2 className="text-3xl font-semibold text-center mb-3 text-fuchsia-500">Nifad</h2>
                    <GitHubCalendar blockMargin={2} blockSize={10} username='nifad2005'></GitHubCalendar>
                </div>
            </div>
        </div>
    );
};

export default Github;