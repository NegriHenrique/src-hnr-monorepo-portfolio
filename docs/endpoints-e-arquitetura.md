# Documentação de Endpoints e Arquitetura

## Endpoints Principais

### Usuários (NestJS)

- `POST /users` — Cria um novo usuário (protegido, requer JWT)
- `GET /users` — Lista todos os usuários (protegido, requer JWT)

#### Exemplo de request (criação):

```json
POST /users
{
  "email": "usuario@exemplo.com",
  "name": "Usuário Exemplo"
}
```

### Pontuações (GeoGrid)

- `POST /scores` — Salva uma nova pontuação para o usuário autenticado (protegido, requer JWT)
- `GET /scores` — Lista todas as pontuações (protegido, requer JWT)

#### Exemplo de request (pontuação):

```json
POST /scores
{
  "value": 123
}
```

### Remoção de Background (FastAPI)

- `POST /remove-background` — Recebe uma imagem (form-data) e retorna a imagem com fundo removido
- `GET /health` — Health check do serviço

#### Exemplo de uso (curl):

```bash
curl -F "file=@imagem.png" http://localhost:8000/remove-background --output sem-fundo.png
```

---

## Arquitetura

- **Host (Next.js):** Orquestra os MFEs via Module Federation, autenticação centralizada (NextAuth.js), SSR/SSG.
- **MFEs (GeoGrid, BG-Remover, Focus):** Apps React independentes, expostos via Vite + Module Federation.
- **shared-ui:** Biblioteca de componentes React compartilhados, documentada com Storybook.
- **Backend NestJS:** API principal (usuários, pontuações, tarefas), JWT, PostgreSQL.
- **Backend FastAPI:** Serviço Python para remoção de fundo de imagens (IA).
- **Bancos:** PostgreSQL (relacional), MongoDB (documental), Redis (cache).
- **Infra:** Docker Compose para desenvolvimento local, pronto para deploy em nuvem (ECS/K8s).

---

## Variáveis de Ambiente Importantes

- `NEXTAUTH_SECRET` — Segredo do JWT (host/NestJS)
- `DATABASE_URL` — String de conexão do PostgreSQL
- `GITHUB_CLIENT_ID`/`GITHUB_CLIENT_SECRET` — OAuth para login de teste
- `COGNITO_CLIENT_ID`/`COGNITO_ISSUER` — (produção) OAuth Cognito

---

## Como rodar localmente

```bash
cd infra
# Build e sobe todos os serviços
docker compose up --build
```

Acesse:

- Host: http://localhost:3000
- GeoGrid: http://localhost:3001
- BG-Remover: http://localhost:3002
- Focus: http://localhost:3003
- API NestJS: http://localhost:4000
- FastAPI: http://localhost:8000

---

## Observações

- Todos os endpoints protegidos exigem JWT no header Authorization: `Bearer <token>`
- O fluxo de autenticação é centralizado pelo NextAuth.js (host)
- O Storybook do shared-ui está disponível via CI/CD (GitHub Pages/Chromatic)
- Para produção, utilize as imagens Docker publicadas no registry

---

_Atualize este template conforme novos endpoints, integrações ou mudanças de arquitetura._
