require("dotenv").config();

export const envConstants: {
  WEBSITE_DOMAIN: string;
  JWT_SECRET: string;
  COOKIE_SECRET: string;
} = {
  WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN || "http://localhost:3000",
  JWT_SECRET:
    process.env.JWT_SECRET ||
    "bfksdbcvoierbcvklsdvbedrilvvbisdvblisdvblvbdlfkvb",
  COOKIE_SECRET:
    process.env.COOKIE_SECRET || "bdfkjbvdfbvkbnfisklbvcsbnvleligvbbdfvdf",
};
