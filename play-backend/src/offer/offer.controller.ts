import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  // Créer une nouvelle offre
  @Post()
  async create(@Body() createOfferDto: CreateOfferDto) {
    return this.offerService.create(createOfferDto);
  }

  // Récupérer toutes les offres
  @Get()
  async findAll() {
    return this.offerService.findAll();
  }

  // Récupérer une offre par son ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.offerService.findOne(id);
  }

  // Mettre à jour une offre
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offerService.update(id, updateOfferDto);
  }

  // Supprimer une offre
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.offerService.remove(id);
  }
}
