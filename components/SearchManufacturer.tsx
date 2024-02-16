'use client';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

export default function SearchManufacturer({
    manufacturer,
    setManufacturer,
}: SearchManufacturerProps) {
    const [query, setQuery] = useState('');

    return (
        <div className='seaerc-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-{14px]'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='Car Logo'
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className='search-manufacturer__input'
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        Leave='transition ease-in duration-100'
                        LeaveFrom='opacity-100'
                        LeaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options></Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
