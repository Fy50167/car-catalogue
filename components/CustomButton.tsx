"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

export default function CustomButton({ title, btnType, containerStyles, handleClick }: CustomButtonProps) {
    return (
        <button
        disabled = {false}
        type = {btnType || 'button'}
        className = {`custom-btn border-black-100 border ${containerStyles}`}
        onClick = {handleClick}
        >
            <span className = {`flex-1`}>
                {title}
            </span>

        </button>
    )
}