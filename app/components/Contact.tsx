import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex justify-center items-center space-x-4 py-8">
                <a href="https://www.linkedin.com/in/harissukasno" target="_blank" rel="noopener noreferrer" style={{ marginRight: '16px', color: 'black' }} aria-label="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
                </svg>
                </a>
                <a href="mailto:harissukasno@gmail.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '16px', color: 'black' }} aria-label="Gmail">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
                    <path d="M12 13.065l-11.985-8.065v16h23.97v-16zm11.985-9.065h-23.97l11.985 8.065zm-11.985 10.065l-11.985-8.065v-2l11.985 8.065 11.985-8.065v2z"/>
                </svg>
                </a>
                <a href="https://github.com/harissukasno" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }} aria-label="GitHub">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                </a>
        </div>
    );
};

export default Contact;