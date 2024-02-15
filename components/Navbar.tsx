import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

export default function Navbar() {
    return (
        <header className = 'w-full absolute z-10'>
            <nav className = 'mx-auto flex justify-between items-center px-16 md:px-6 py-4 max-w-[1440px]'>
                <Link href = '/' className = 'flex justify-center items-center'>
                    <Image src = '/logo.svg' alt = 'Car Hub Logo' width = {118} height = {18} className = 'object-contain' />
                </Link>

                <CustomButton title = 'Sign In' btnType = 'button' containerStyles = 'text-primary-blue rounded-full bg-white min-w-[130px]' />
            </nav>
        </header>
    )
}