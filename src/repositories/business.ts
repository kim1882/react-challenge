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

export const updateBusiness = (id: string, name: string) => {
  const url = `/business/${id}`;
  return axiosInstance({
    method: "PUT",
    data: { name },
    url,
  });
};

export const deleteBusiness = (id: string) => {
  const url = `/business/${id}`;
  return axiosInstance({
    method: "DELETE",
    url,
  });
};
