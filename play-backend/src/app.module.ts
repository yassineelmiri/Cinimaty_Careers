import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { configuration } from 'config/app.config';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CandidatureModule } from './candidature/candidature.module';
import { OfferModule } from './offer/offer.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';


@Module({
  imports: [


    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads', // Cela crée un préfixe '/uploads' pour vos fichiers
    }),
    // Config Module setup with both configurations
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),

    // MongoDB connection using the database config
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.url'),  // Assurez-vous que la clé 'database.url' existe dans votre configuration
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),

    // JWT setup using the JWT config
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),  // Assurez-vous que la clé 'jwt.secret' existe dans votre configuration
        signOptions: {
          expiresIn: configService.get<string>('jwt.expiresIn'),  // Assurez-vous que la clé 'jwt.expiresIn' existe dans votre configuration
        },
      }),
      global: true,
      inject: [ConfigService],
    }),

    // Modules

    UserModule,
    AuthModule,
    UserModule,
    CandidatureModule, OfferModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}