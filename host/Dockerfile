# Dockerfile para produção do Host Next.js
FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/yarn.lock yarn.lock
RUN yarn install --production --frozen-lockfile
EXPOSE 3000
CMD ["yarn", "start"]
