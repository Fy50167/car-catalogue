import { FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
   const { manufacturer, year, model, limit, fuel } = filters;

   const headers = {
		'X-RapidAPI-Key': 'f2f309773emsh6f6eb1c241fae98p1ff76djsn1602c81f0ba2',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
   } 

   const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}
      &year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, 
      {
      headers: headers,
      });

   const result = await response.json();
   console.log('cars hit');

   return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
   const basePricePerDay = 50; 
   const mileageFactor = 0.1; 
   const ageFactor = 0.05; 
   const mileageRate = city_mpg * mileageFactor;
   const ageRate = (new Date().getFullYear() - year) * ageFactor;
   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
   return rentalRatePerDay.toFixed(0);
 };

