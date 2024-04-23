FROM node:lts-bookworm as build
WORKDIR /workdir
# RUN npm install yarn
COPY . .
RUN yarn
RUN yarn run build

FROM node:lts-bookworm-slim as web-server
WORKDIR /www
COPY --from=build /workdir /www
CMD yarn run start