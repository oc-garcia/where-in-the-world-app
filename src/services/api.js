export const connectApi = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    if (data) {
      console.log(data);
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
