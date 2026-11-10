FROM node:lts-bookworm-slim

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y --no-install-recommends ffmpeg python3 && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund
COPY . .
RUN mkdir -p database database/temp backup rynn-session && chown -R node:node /app/database /app/backup /app/rynn-session && chown node:node /app

USER node
CMD ["npm", "start"]
