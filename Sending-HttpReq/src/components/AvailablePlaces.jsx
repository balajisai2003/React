import Places from './Places.jsx';
import ErrorPage from './ErrorPage.jsx';
import { useState, useEffect } from 'react';
import {sortPlacesByDistance} from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      
      try
      {
        setIsFetching(true);
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();
        if(!response.ok){
          throw Error( 'Failed to fetch places.');
        }

        navigator.geolocation.getCurrentPosition((position)=>{

          const sortedPlaces = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
        setAvailablePlaces(resData.places);
      }
      catch(error)
      {
        setError({message: error.message || 'Could not fetch places. Please try again later.'});
      }
    }
    fetchPlaces();
  },[]);

  if(error){
    return <ErrorPage title="Failed to fetch places" message={error.message} />
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
