import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

describe('/scores (e2e)', () => {
  let app: INestApplication;
  let jwt: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // Cria usuário e gera JWT fake (ajuste conforme sua lógica de autenticação)
    // Aqui, para exemplo, usamos um token assinado com o mesmo segredo do NEXTAUTH_SECRET
    const userPayload = { id: 1, email: 'test@e2e.com', name: 'Test User' };
    const secret = process.env.NEXTAUTH_SECRET || 'changeme';
    const jwtLib = require('jsonwebtoken');
    jwt = jwtLib.sign(userPayload, secret);
  });

  it('GET /scores deve exigir autenticação', () => {
    return request(app.getHttpServer()).get('/scores').expect(401);
  });

  it('POST /scores deve exigir autenticação', () => {
    return request(app.getHttpServer())
      .post('/scores')
      .send({ value: 100 })
      .expect(401);
  });

  it('GET /scores autenticado deve retornar 200', () => {
    return request(app.getHttpServer())
      .get('/scores')
      .set('Authorization', `Bearer ${jwt}`)
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
