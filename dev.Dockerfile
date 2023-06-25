FROM node:18.16-alpine3.18

RUN apk add --no-cache rsync

WORKDIR /cache

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci && npm cache clean --force; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    # Allow install without lockfile, so example works even without Node.js installed locally
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
    fi 

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 washopilot
# USER node
WORKDIR /app
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
# COPY . .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
CMD \
    sh -c "rsync -arv /cache/node_modules/. /app/node_modules" && \
    if [ -f yarn.lock ]; then yarn dev; \
    elif [ -f package-lock.json ]; then npm run dev; \
    elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
    else yarn dev; \
    fi