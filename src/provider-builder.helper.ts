import { DataSource, EntitySchema, MixedList } from 'typeorm';
import { buildProdProvider, buildTestProvider } from './provider-builder';

export function buildDataSource(
  options: {
    environment: string;
    type: 'postgres' | 'mariadb';
    hostname: string;
    port: number;
    username: string;
    password: string;
    database: string;
  },
  entities: MixedList<string | EntitySchema>,
): Promise<DataSource> {
  const { environment, type, hostname, port, username, password, database } =
    options;
  const isTest = environment.includes('test');
  const datasource = isTest
    ? buildTestProvider(entities)
    : buildProdProvider(
        type,
        hostname,
        port,
        username,
        password,
        database,
        entities,
      );
  return datasource.initialize();
}
