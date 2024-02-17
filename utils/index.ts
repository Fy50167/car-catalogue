export async function fetchCars() {
   const headers = {
		'X-RapidAPI-Key': 'f2f309773emsh6f6eb1c241fae98p1ff76djsn1602c81f0ba2',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
   } 

   const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
   });

   const result = await response.json();

   return result
}
