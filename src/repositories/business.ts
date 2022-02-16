import { axiosInstance } from ".";
import { IPerson } from "../slices/business.slice";

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

export const createBusinessPerson = (businessId: string, person: IPerson) => {
  const url = `/business/${businessId}/persons`;
  return axiosInstance({
    method: "POST",
    data: person,
    url,
  });
};

export const getBusinessPersonsList = (businessId: string) => {
  const url = `/business/${businessId}/persons`;
  return axiosInstance({
    method: "GET",
    url,
  });
};

export const updateBusinessPerson = (
  businessId: string,
  personId: string,
  person: IPerson
) => {
  const url = `/business/${businessId}/persons/${personId}`;
  return axiosInstance({
    method: "PUT",
    data: person,
    url,
  });
};

export const deleteBusinessPerson = (businessId: string, personId: string) => {
  const url = `/business/${businessId}/persons/${personId}`;
  return axiosInstance({
    method: "DELETE",
    url,
  });
};
