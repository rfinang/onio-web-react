import _ from "lodash";
const DOMAIN_API = process.env.NEXT_PUBLIC_DOMAIN_API || "";
const HOST_URL = process.env.HOST_URL || "";
const HOST_API = HOST_URL + "/api";
const SERVER_TIMEZONE = process.env.SERVER_TIMEZONE || 'Europe/Oslo'
export const HUBSPOT_URL = "https://api.hsforms.com/submissions/v3/integration/submit";

export default {
  DOMAIN_API: _.trimEnd(DOMAIN_API, "/"),
  HOST_URL: _.trimEnd(HOST_URL, "/"),
  HOST_API: _.trimEnd(HOST_API, "/"),
  SERVER_TIMEZONE: SERVER_TIMEZONE,
};
