FROM cypress/included:13.7.0

WORKDIR /e2e

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

CMD ["npm", "test"]