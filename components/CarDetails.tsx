import { CarProps } from '@/types';

export interface CarDetailsProps {
    isOpen: boolean;
    setIsOpen: () => void;
    car: CarProps;
}

export default function CarDetails({
    isOpen,
    setIsOpen,
    car,
}: CarDetailsProps) {
    return <></>;
}
