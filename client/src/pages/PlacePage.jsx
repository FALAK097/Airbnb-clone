import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookingWidget from '../BookingWidget';
import PlaceGallery from '../PlaceGallery';
import AddressLink from '../AddressLink';

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return '';

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          <div className="font-semibold">
            <h2 className="text-2xl mt-4">Perks</h2>
            <div className="flex flex-wrap gap-2">
              {place.perks.map((perk, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                  {perk}
                </span>
              ))}
            </div>
          </div>
          <div className="font-semibold text-xl mt-4">
            Check-in Time: <span className="font-light">{place.checkIn}</span>
          </div>
          <div className="font-semibold text-xl mt-2">
            Check-out Time: <span className="font-light">{place.checkOut}</span>
          </div>
          <div className="font-semibold text-xl mt-2">
            Maximum number of guests:{' '}
            <span className="font-light">{place.maxGuests}</span>
          </div>
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}
