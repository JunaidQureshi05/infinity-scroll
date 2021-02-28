// Unsplash API
const count = 10;
const apiKey = '1CENPj-zNtIGSNWWGmkdtSgAURsQK16zjz2mDrGfPlI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos for unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

// Onload
getPhotos();
