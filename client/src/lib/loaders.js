import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  console.log(params.id);
  const res = await apiRequest("/posts/" + params.id);
  console.log("inside loaders.js: ");
  console.log(res.data);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const res = await apiRequest("/posts?" + query); // yahan se ye query pass hogi controller mein
  return res.data;
};
