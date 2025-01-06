import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatureService } from './candidature.service';
import { CandidatureController } from './candidature.controller';
import { Candidature, CandidatureSchema } from './schemas/candidature.schema';



@Module({
  imports: [
      MongooseModule.forFeature([{ name: Candidature.name, schema: CandidatureSchema }]), // Déclaration du modèle Room
    ],
  controllers: [CandidatureController],
  providers: [CandidatureService],
  exports: [CandidatureService]
})
export class CandidatureModule {}
