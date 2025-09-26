import _ from "lodash";

export const buildUrl = (url, parameters) => {
    let urlWithParameters = url;

    for (const [index, [key, value]] of Object.entries(parameters).entries()) {
        const sign = index ? "&" : "?";
        urlWithParameters += `${sign}${key}=${value}`;
    }

    return urlWithParameters;
};
export const clearParams = (parameters, exclusion = []) =>
    _.reduce(parameters, (accumulator, value, item) => {
        if (value || exclusion.includes(item)) accumulator[item] = value;
        return accumulator;
    }, {});

