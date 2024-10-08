'use client';


import { useTheme } from '@/contexts/theme-context';
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className='fixed bottom-5 right-4 bg-white w-[3rem] 
        h-[3rem] shadow-2xl rounded-full flex items-center justify-center 
        bg-opacity-80 backdrop-blur-[0.5rem] border border-white 
        border-opacity-40 hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
            onClick={toggleTheme}
        >
            {theme === 'light' ? <BsSun /> : <BsMoon />}
        </button>
    )
}
