FROM node:lts-bookworm as build
WORKDIR /workdir
COPY . .
RUN yarn 
RUN yarn run build

FROM node:lts-bookworm-slim as web-server
RUN apt-get update -y && apt-get install -y openssl
WORKDIR /www
COPY --from=build /workdir /www
CMD npx prisma migrate deploy && yarn run start