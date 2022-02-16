import { axiosInstance } from ".";

export const createBusiness = (name: string) => {
  const url = "/business";
  return axiosInstance({
    method: "POST",
    data: { name },
    url,
  });
};

export const getBusinessList = () => {
  const url = "/business";
  return axiosInstance({
    method: "GET",
    url,
  });
};
