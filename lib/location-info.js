export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationLatLong = async (locatonName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locatonName}`
    );
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getResolvedLatLong = async (location, lat, lon) => {
  console.log(location, lat, lon);
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatlong = await getLocationLatLong(location);
  console.log(locationLatlong);

  if (locationLatlong.latitude && locationLatlong.longitude) {
    const lat = locationLatlong.latitude;
    const lon = locationLatlong.longitude;

    return { lat, lon };
  }
};
