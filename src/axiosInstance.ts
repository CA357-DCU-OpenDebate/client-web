const axiosDefault = require("axios").default;
let defaultUrl = "http://127.0.0.1:8080/";
let overrideUrl = process.env.VUE_APP_URL;

const isDefaultUrl = overrideUrl == "" || overrideUrl == null || overrideUrl == undefined;
export function getAxios(isServerSideImplemented: boolean): any {
  if (!isServerSideImplemented) {
    return axiosMock;
  }
  return isDefaultUrl ? axios : axiosMock;
}

//We created 2 axios cause there can be used the two at different ways if isDefaultUrl and !isServerSideImplemented
let axiosMock = axiosDefault.create({
  baseURL: !isDefaultUrl ? overrideUrl : "http://127.0.0.1:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export let axios = axiosDefault.create({
  baseURL: defaultUrl, // defaultUrl
  headers: {
    "Content-Type": "application/json",
  },
});
