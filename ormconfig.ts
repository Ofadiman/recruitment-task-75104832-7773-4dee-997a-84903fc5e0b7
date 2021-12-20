const options = {
  autoLoadEntities: true,
  cli: {
    migrationsDir: `${process.cwd()}/src/database/migrations`
  },
  database: `postgres`,
  entities: [`${process.cwd()}/dist/**/*.entity.js`],
  host: `recruitment-task-75104832-7773-4dee-997a-84903fc5e0b7-database`,
  keepConnectionAlive: true,
  logging: [`error`, `query`],
  migrations: [`${process.cwd()}/dist/src/database/migrations/*.js`],
  migrationsRun: true,
  password: `postgres`,
  port: 5432,
  subscribers: [`${process.cwd()}/dist/**/*.subscriber.js`],
  synchronize: false,
  type: `postgres`,
  username: `postgres`
}

module.exports = options
