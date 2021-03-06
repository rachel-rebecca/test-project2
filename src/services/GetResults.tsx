import axios from "axios"
import Event from "../models/Event";


const key = `${process.env.REACT_APP_API_KEY}`;
const locale = "en-us";
const units = "miles";



const http = axios.create({
    baseURL: "https://app.ticketmaster.com/discovery/v2/",
    params: {
      apikey: key,
    },
  });

//   keyword?:any, latlong?:any, startDateTime?:any, endDateTime?:any
export default function getResults (keyword?:any,latlong?:any):Promise<any> {
    return http.get("/events.json", {
        params: {
            apikey: key,
            keyword: keyword,
            latlong: latlong
        }
    })
    .then((response) => response.data._embedded.events)
}

// export function getKeywordResults (keyword?: any):Promise<any>{
//     return http.get("/events.json", {
//         params: {
//             apikey: key,
//             keyword: keyword,
//             locale: locale
//         }
//     })
//     .then((response) => response.data._embedded.events)
// }

// export function getLocationResults (latlong?: any):Promise<any>{
//     return http.get("/events.json", {
//         params: {
//             apikey: key,
//             latlong: latlong,
//             radius: "100",
//             units: units,
//             locale: locale
//         }
//     })
//     .then((response) => response.data._embedded.events)
// }

// export function getStartDateResults (startDateTime?: any):Promise<any>{
//     return http.get("/events.json", {
//         params: {
//             apikey: key,
//             startDateTime: startDateTime,
//             locale: locale
//         }
//     })
//     .then((response) => response.data._embedded.events)
// }

// export function getEndDateResults (endDateTime?: any):Promise<any>{
//     return http.get("/events.json", {
//         params: {
//             apikey: key,
//             endDateTime: endDateTime,
//             locale: locale
//         }
//     })
//     .then((response) => response.data._embedded.events)
// }