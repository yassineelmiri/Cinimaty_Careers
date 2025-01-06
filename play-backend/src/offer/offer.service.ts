import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from './schemas/offer.schema';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OfferService {
  constructor(@InjectModel(Offer.name) private offerModel: Model<Offer>) {}

  // Créer une nouvelle offre
  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const createdOffer = new this.offerModel(createOfferDto); // Crée une nouvelle offre
    return createdOffer.save(); // Sauvegarde l'offre dans la base de données
  }

  // Récupérer toutes les offres
  async findAll(): Promise<Offer[]> {
    return this.offerModel.find().exec(); // Récupère toutes les offres de la base de données
  }

  // Récupérer une offre par son ID
  async findOne(id: string): Promise<Offer | null> {
    return this.offerModel.findById(id).exec(); // Récupère l'offre avec l'ID spécifié
  }

  // Mettre à jour une offre
  async update(id: string, updateOfferDto: UpdateOfferDto): Promise<Offer | null> {
    return this.offerModel.findByIdAndUpdate(id, updateOfferDto, { new: true }).exec(); // Met à jour l'offre et retourne la mise à jour
  }

  // Supprimer une offre
  async remove(id: string): Promise<Offer | null> {
    return this.offerModel.findByIdAndDelete(id).exec(); // Supprime l'offre par ID
  }
}
