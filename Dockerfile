FROM apline:node8

COPY . /app

WORKDIR /app/client

RUN npm run build



