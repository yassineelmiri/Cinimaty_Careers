// candidature.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Candidature } from './schemas/candidature.schema';
import { CreateCandidatureDto } from './dto/create-candidature.dto';
import { UpdateCandidatureDto } from './dto/update-candidature.dto';

@Injectable()
export class CandidatureService {
  constructor(@InjectModel(Candidature.name) private candidatureModel: Model<Candidature>) {}

  // Méthode pour créer une candidature
  async create(createCandidatureDto: CreateCandidatureDto) {
    const createdCandidature = new this.candidatureModel({
      ...createCandidatureDto,
      createdAt: new Date(),  
    });
    return await createdCandidature.save();
  }

  // Récupérer toutes les candidatures
  async findAll() {
    return this.candidatureModel.find().exec();
  }

  // Récupérer une candidature par son ID
  async findOne(id: string) {
    return this.candidatureModel.findById(id).exec();
  }

  // Mettre à jour une candidature
  async update(id: string, updateCandidatureDto: UpdateCandidatureDto) {
    return this.candidatureModel.findByIdAndUpdate(id, updateCandidatureDto, { new: true }).exec();
  }

  // Supprimer une candidature
  async remove(id: string) {
    return this.candidatureModel.findByIdAndDelete(id).exec();
  }
}
