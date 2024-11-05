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
    const response = await fetch(`https://http://localhost:3000/api/location`);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e.message);
  }
};
