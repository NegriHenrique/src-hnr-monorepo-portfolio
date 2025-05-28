# Dockerfile para produção de um MFE Vite (GeoGrid, BG-Remover, Focus)
FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist dist
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/yarn.lock yarn.lock
RUN yarn install --production --frozen-lockfile
EXPOSE 3000
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
