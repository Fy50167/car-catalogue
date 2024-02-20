'use client';

import { CustomFilterProps } from '@/types';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';

export default function CustomFilter({ title, options }: CustomFilterProps) {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className='w-fit'>
            <Listbox value={selected} onChange={(e) => setSelected(e)}>
                <div className='relative w-fit z-10'>
                    <Listbox.Button className='custom-filter__btn'>
                        <span className='block truncate'>{selected.title}</span>
                        <Image
                            src='/chevron-up-down.svg'
                            width={20}
                            height={20}
                            className='ml-4 object-contain'
                            alt='chevron up down'
                        />
                    </Listbox.Button>
                </div>
            </Listbox>
        </div>
    );
}
