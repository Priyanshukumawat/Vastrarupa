import React, { useState, useEffect } from 'react';

function CommingSoon() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const words = "COMING SOON...";

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < words.length) {
                setText((prevText) => prevText + words[index]);
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setText('');
                    setIndex(0);
                }, 1000); // Wait for 1 second before clearing and starting over
            }
        }, 100);

        return () => clearInterval(interval);
    }, [index, words]);

    return (
        <>
            <div className='bg-[#F0F0F0] flex justify-center text-[#AC7D88] text-bold text-3xl items-center h-screen'>
                {text}
            </div>
        </>
    );
}

export default CommingSoon;
