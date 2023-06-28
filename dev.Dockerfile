FROM node:18.16.1-alpine3.18

RUN \
    apk add --no-cache rsync; \
    apk add --no-cache libc6-compat

WORKDIR /cache
# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci -d && npm cache clean --force

USER node
WORKDIR /app
# COPY package.json package-lock.json* ./
# COPY src ./src
# COPY public ./public
# COPY next.config.js .
# COPY tsconfig.json .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
CMD \
    sh -c "rsync -arv /cache/node_modules/. /app/node_modules" && \
    npm run dev; \