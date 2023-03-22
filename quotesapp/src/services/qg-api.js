export const getQuotes = async () => {
  try {
    const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random");
    const data = await response.json();
    return data.data[0];
} catch (e) {
    console.error(e);
}
}
