# Dockerfile para produção do Host Next.js
FROM node:22-alpine AS builder
WORKDIR /repo
COPY ../../ .
RUN yarn install --frozen-lockfile
WORKDIR /repo/host
RUN yarn build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /repo/host/.next .next
COPY --from=builder /repo/host/public public
COPY --from=builder /repo/host/package.json package.json
COPY --from=builder /repo/yarn.lock yarn.lock
COPY --from=builder /repo/host/next.config.js next.config.js
COPY --from=builder /repo/host/node_modules node_modules
EXPOSE 3000
CMD ["yarn", "start"]
