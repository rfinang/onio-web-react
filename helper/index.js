import _ from 'lodash';

export * from "./blog";
export * from "./search";
export * from "./transform-data"



export const extractDataFromAPI = (data, defaultData ={}, key="data.data") => {
    return _.get(data,key,defaultData)
}