'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

export default function CustomButton({
    title,
    btnType,
    containerStyles,
    handleClick,
    textStyles,
    rightIcon,
}: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType || 'button'}
            className={`custom-btn border-black-100 border ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image
                        src={rightIcon}
                        alt='right icon'
                        className='object-contain'
                        width={20}
                        height={20}
                    />
                </div>
            )}
        </button>
    );
}
