FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src src
COPY public public

RUN npm run build


# Final Image
FROM stevekaufman/react-server

WORKDIR /app

COPY --from=builder /app/build eshop

CMD [ "serve", "/app" ]