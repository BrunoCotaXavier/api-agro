import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],  // Aqui você importa o módulo principal
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  
  // ### - PROPERTY TEST
  it('/property (POST)', async () => {
    const createPropertyDto = {
      name: 'Fazenda Santa Luzia',
      totalArea: 500,
      vegetationArea: 250,
      cultivableArea: 250,
      state: 'São Paulo',
      city: 'Ribeirão Preto',
      producerId: 1,
    };

    return request(app.getHttpServer())
      .post('/property')
      .send(createPropertyDto)  
      .expect(201) 
      .expect((response) => {
        expect(response.body).toHaveProperty('name', 'Fazenda Santa Luzia');
        expect(response.body).toHaveProperty('totalArea', 500);
        expect(response.body).toHaveProperty('vegetationArea', 250);
        expect(response.body).toHaveProperty('cultivableArea', 250);
        expect(response.body).toHaveProperty('state', 'São Paulo');
        expect(response.body).toHaveProperty('city', 'Ribeirão Preto');
        expect(response.body).toHaveProperty('producerId', 1);
      });
  });

  it('/property (GET)', () => {
    return request(app.getHttpServer())
      .get('/property')
      .expect(200)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Object);
      });
  });

  // ### - PRODUCER TEST
  it('/producers (POST)', async () => {
    const createProducerDto = {
      name: 'João Silva',
      document: '12345678901',
      documentType: 'CPF',
    };

    return request(app.getHttpServer())
      .post('/producers')  
      .send(createProducerDto)  
      .expect(201)  
      .expect((response) => {
        expect(response.body).toHaveProperty('name', 'João Silva');
        expect(response.body).toHaveProperty('document', '12345678901');
        expect(response.body).toHaveProperty('documentType', 'CPF');
      });
  });

  it('/producers (GET)', () => {
    return request(app.getHttpServer())
      .get('/producers')
      .expect(200)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Object);
      });
  });

  // ### - HARVEST TEST
  it('/harvests (POST)', async () => {
    const createHarvestDto = {
      year: 2025,
      plantedArea: 100,
      propertyId: 1,
      cultureId: 1,
    };

    return request(app.getHttpServer())
      .post('/harvests')  
      .send(createHarvestDto)  
      .expect(201)  
      .expect((response) => {
        expect(response.body).toHaveProperty('year', 2025);
        expect(response.body).toHaveProperty('plantedArea', 100);
        expect(response.body).toHaveProperty('propertyId', 1);
        expect(response.body).toHaveProperty('cultureId', 1);
      });
  });

  it('/harvests (GET)', () => {
    return request(app.getHttpServer())
      .get('/harvests')
      .expect(200)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Object);
      });
  });

  // ### - CULTURE TEST
  it('/culture (POST)', async () => {
    const createCultureDto = {
      name: 'Soja',
    };

    return request(app.getHttpServer())
      .post('/culture')  
      .send(createCultureDto)  
      .expect(201)  
      .expect((response) => {
        expect(response.body).toHaveProperty('name', 'Soja');
      });
  });

  it('/culture (GET)', () => {
    return request(app.getHttpServer())
      .get('/culture')
      .expect(200)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Object);
      });
  });


  afterAll(async () => {
    await app.close();
  });
});
