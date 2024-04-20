import apiRequest from "./apiRequest";

export const singlePageLoader = async ({request, params}) => {
    console.log(params.id)
    const res = await apiRequest("/posts/" + params.id);
    console.log("inside loaders.js: ");
    console.log(res.data);
    return res.data;
}