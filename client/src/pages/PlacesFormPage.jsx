import { useState } from 'react';
import Perks from '../Perks';
import axios from 'axios';
import PhotosUploader from '../PhotosUploader';
import AccountNav from '../AccountNav';
import { Navigate } from 'react-router-dom';

export default function PlacesFormPage() {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(ev) {
    ev.preventDefault();
    await axios.post('/places', {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={'/account/places'} />;
  }
  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewPlace}>
        {preInput('Title', 'Should be short and catchy for the advertisment')}
        <input
          type="text"
          placeholder="title - For example : My Lovely Apt"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        {preInput('Address', 'Location of the place')}
        <input
          type="text"
          placeholder="address - For example : 123 Main St"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />
        {preInput('Photos', 'More the better')}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {preInput('Description', 'About the place its uniqueness and features')}
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        {preInput('Perks', 'Different perks of your place')}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        {preInput(
          'Extra Info',
          'Any rules or info to be kept in mind like house rules, etc'
        )}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        />
        {preInput(
          'Check In & Check Out Times',
          'Add Check In & Check Out Time, remember to have some time windowfor cleaning the rooms between the guests'
        )}
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Check In Time</h3>
            <input
              type="time"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check Out Time</h3>
            <input
              type="time"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max Number of Guests</h3>
            <input
              type="number"
              placeholder="4"
              value={maxGuests}
              onChange={(ev) => setMaxGuests(ev.target.value)}
            />
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
