import axios from "axios";

axios.defaults.baseURL = "https://64ca6df2700d50e3c704e441.mockapi.io/api/";

axios.defaults.params = {
  //sortBy: { make: "", rentalPrice: "", mileage: "" },
  limit: 12,
};

export const getAdverts = async (page) => {
  const params = {
    //sortBy: { make: "", rentalPrice: "", mileage: "" },
    page,
  };

  const { data } = await axios.get("/adverts", {params});
  console.log(data);
  return data;
};
