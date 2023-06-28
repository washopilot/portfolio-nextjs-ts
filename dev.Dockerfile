FROM node:18.16.1-alpine3.18 AS base

FROM base AS change-vol
USER root
RUN addgroup -g 1001 -S nodejs


FROM base AS builder-runner
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

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us
