[![codecov](https://codecov.io/gh/SEU_USUARIO/SEU_REPO/branch/main/graph/badge.svg)](https://codecov.io/gh/SEU_USUARIO/SEU_REPO)

# Checklist de Qualidade e CI/CD

- [ ] Testes unitários backend (NestJS) com cobertura
- [ ] Testes unitários shared-ui (Vitest) com cobertura
- [ ] Testes E2E frontend (Cypress) configurados e rodando
- [ ] Workflow CI/CD rodando build, lint, testes e2e/unitários
- [ ] Publicação automática do Storybook (GitHub Pages/Chromatic)
- [ ] Badge de cobertura Codecov no README
- [ ] Deploy automatizado (Docker/K8s/AWS)
- [ ] Documentação atualizada (README, arquitetura, endpoints)

# Projeto MicroFrontends (Portfólio)

## Visão Geral

Este projeto demonstra uma arquitetura de **Micro-Frontends** integrada, com um _host_ em Next.js que carrega três micro-aplicações independentes em React/Vite. As MFEs são: **GeoGrid** (jogo de bandeiras em grade 3x3), **Removedor de Background** (upload de imagem para remoção de fundo via IA) e **Ambiente de Foco** (app de produtividade inspirado em projeto existente). Há também uma biblioteca compartilhada de componentes React documentada com Storybook, promovendo código reaproveitável e testes visuais.

**Características principais:**

- Arquitetura baseada em [Module Federation](https://webpack.js.org/concepts/module-federation/) do Webpack 5, permitindo carregar dinamicamente componentes de outras aplicações.
- Container host em **Next.js** (SSR/SSG) orquestrando as MFEs.
- Cada MFE em **React 18** usando **Vite** para bundling e desenvolvimento rápido.
- Backend principal em **NestJS** (API em Node.js/TypeScript) e serviço de remoção de fundo em **FastAPI** (Python de alta performance).
- Persistência de dados com **PostgreSQL** (dados relacionais), **MongoDB** (dados documentais) e **Redis** (cache/mensageria).
- Autenticação centralizada com **NextAuth.js**, JWT e Amazon **Cognito** (OAuth).
- Deploy local com **Docker + Kubernetes** e produção em **AWS ECS/Fargate** (computação serverless de containers).
- CI/CD automatizado com **GitHub Actions** para build, testes, deploy e versionamento (Changesets) da biblioteca UI.

## Estrutura de Diretórios

- `/host` – Aplicação Next.js (host) com configuração de Module Federation.
- `/mfes/geogrid` – Microfrontend React/Vite do jogo de bandeiras (GeoGrid).
- `/mfes/bg-remover` – Microfrontend React/Vite do removedor de background.
- `/mfes/focus` – Microfrontend React/Vite do ambiente de foco (produtividade).
- `/shared-ui` – Biblioteca de componentes React compartilhados + Storybook.
- `/backend/nestjs` – Backend NestJS (API principal).
- `/backend/fastapi` – Backend FastAPI (serviço de IA de remoção de fundo).
- `/infra` – Arquivos de infraestrutura (Docker, manifests Kubernetes, configs AWS, etc).
- `/docs` – Documentação adicional (ex: diagramas, especificações).

## Tecnologias Utilizadas

- **Front-end:** Next.js, React 18, Vite, Module Federation (Webpack 5), Storybook, Chromatic, CSS-in-JS ou Tailwind.
- **Back-end:** NestJS (TypeScript/Node.js), FastAPI (Python), PostgreSQL, MongoDB, Redis.
- **Autenticação:** NextAuth.js, JWT, Amazon Cognito, OAuth 2.0.
- **Infraestrutura:** Docker, Kubernetes (local), AWS ECS Fargate, AWS RDS/DocumentDB/ElastiCache.
- **DevOps:** GitHub Actions (CI/CD), Changesets (versionamento), Yarn Workspaces/PNPM (monorepo), AWS CLI.

## Instalação e Execução Local

1. **Requisitos:** instale Node.js (>=16) e Yarn ou PNPM, além de Docker (para bancos de dados e serviços) e kubectl/kind para orquestração local.
2. **Clonar repositório:** `git clone <URL-do-repo> && cd <repo>`.
3. **Instalar dependências:** executar `yarn install` na raiz para instalar todos os pacotes.
4. **Configurar variáveis de ambiente:** criar arquivos `.env` conforme exemplos, definindo strings de conexão dos bancos, chaves JWT e credenciais do Cognito (COGNITO_CLIENT_ID, COGNITO_ISSUER, etc).
5. **Rodar serviços localmente:**
   - Inicie bancos de dados e serviços auxiliares via Docker/Kubernetes (`docker-compose up` ou `kubectl apply -f infra/`).
   - Em terminais separados, rode `yarn dev` em `/host`, `/mfes/geogrid`, `/mfes/bg-remover`, `/mfes/focus`, `/backend/nestjs` e `/backend/fastapi`. Cada frontend abrirá numa porta (ex: host em 3000, geogrid em 3001, etc).
6. **Acessar a aplicação:** abra `http://localhost:3000` para ver o host e navegar entre os microfrontends via menus. Os dados usados nos jogos e funcionalidades estarão salvos no banco local (PostgreSQL/Mongo).
7. **Executar testes:** rode `yarn test` nos pacotes que contêm testes (por exemplo, componentes do `shared-ui`).

## Arquitetura

A aplicação segue uma arquitetura de microfrontends **baseada em containers independentes**. O _host_ em Next.js utiliza o Module Federation para carregar as MFEs React/Vite como remotos em tempo de execução, compartilhando bibliotecas comuns (como React) para evitar duplicação. Os MFEs rodam em seus próprios domínios internos e expõem componentes/rotas para o host usar. O backend é composto por dois serviços: um servidor NestJS monolítico (API centralizada, gerencia lógica de negócios e banco de dados relacional) e um serviço de FastAPI em Python para processamento de imagem (remoção de fundo) usando IA. Os dados são distribuídos entre PostgreSQL (dados relacionais), MongoDB (dados não-relacionais) e Redis (cache/filas). Para o ambiente local, usamos **Docker e Kubernetes** para orquestrar todos os serviços juntos. Em produção, cada serviço é executado em containers no **AWS ECS/Fargate** (serverless), garantindo escalabilidade. A autenticação é gerenciada por NextAuth.js (node) usando JWT, integrado ao Amazon Cognito.

## Como Executar Localmente

- **Via scripts:** com todos os serviços em execução (veja seção de instalação), pode-se executar `yarn dev` no host e em cada MFE. O host acessa automaticamente os remotos.
- **Via Docker/Kubernetes:** ajustar o `docker-compose.yaml` (ou manifests K8s) na pasta `/infra` para subir todos de uma vez. Usar `docker compose up --build` ou `kubectl apply -f infra/`.
- **Database:** caso prefira, é possível conectar serviços a instâncias externas de banco (ex: RDS/Postgres, Mongo Atlas). Ajustar variáveis de ambiente para isso.
- **Storybook:** navegar até `/shared-ui` e rodar `yarn storybook`. O Storybook estará disponível em `http://localhost:6006`, exibindo componentes documentados.
- **Testes visuais:** caso tenha Chromatic configurado, ele irá gerar snapshots das histórias a cada mudança e enviar relatórios.

## Links Relevantes

- [Documentação oficial do Next.js](https://nextjs.org/docs) e [Module Federation](https://webpack.js.org/concepts/module-federation/).
- [NextAuth.js com Cognito](https://next-auth.js.org/providers/cognito).
- [FastAPI (Python) – documentação oficial](https://fastapi.tiangolo.com/).
- [Documentação NestJS](https://docs.nestjs.com/).
- [Storybook](https://storybook.js.org/) e [Chromatic](https://www.chromatic.com/) para integração visual.
- [AWS Fargate](https://aws.amazon.com/fargate/) e [Kubernetes](https://kubernetes.io/) para deploy.

## Roadmap

- Adicionar testes end-to-end (Cypress/Playwright) integrando front e API.
- Implementar internacionalização (i18n) no host e MFEs.
- Melhorar acessibilidade (a11y) em todos os componentes.
- Expandir o jogo GeoGrid com placar global e modos de dificuldade.
- Otimizar serviço de remoção de fundo (ex.: usar GPU ou modelos avançados).
- Migrar banco de dados de desenvolvimento para ambientes cloud (e.g. RDS, DocumentDB, ElastiCache).
- Refatorar o ambiente de foco adicionando notificações e estatísticas de produtividade.
- Publicar site estático de documentação e demo do projeto.

_Este README inicial resume a arquitetura, instalação e uso do projeto. À medida que o desenvolvimento avança, deve-se atualizar detalhes específicos (como URLs de serviços, chaves de API) e expandir a documentação conforme necessário._
