FROM node:18.16.1-alpine3.18

RUN \
    apk add --no-cache rsync; \
    apk add --no-cache libc6-compat

WORKDIR /cache
# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci -d && npm cache clean --force

RUN addgroup -g 1001 -S nodejs
USER node:nodejs
WORKDIR /app
COPY --chown=node:nodejs . .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us
CMD \
    sh -c "rsync -arv /cache/node_modules/. /app/node_modules" && \
    npm run dev; \