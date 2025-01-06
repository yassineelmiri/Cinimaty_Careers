// candidature.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidatureService } from './candidature.service';
import { CreateCandidatureDto } from './dto/create-candidature.dto';
import { UpdateCandidatureDto } from './dto/update-candidature.dto';

@Controller('candidature')
export class CandidatureController {
  constructor(private readonly candidatureService: CandidatureService) {}

  // Créer une candidature
  @Post()
  async create(@Body() createCandidatureDto: CreateCandidatureDto) {
    return this.candidatureService.create(createCandidatureDto);
  }

  // Récupérer toutes les candidatures
  @Get()
  async findAll() {
    return this.candidatureService.findAll();
  }

  // Récupérer une candidature par son ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.candidatureService.findOne(id);
  }

  // Mettre à jour une candidature
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCandidatureDto: UpdateCandidatureDto) {
    return this.candidatureService.update(id, updateCandidatureDto);
  }

  // Supprimer une candidature
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.candidatureService.remove(id);
  }
}
