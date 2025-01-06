import {
    IsString,
    IsInt,
    IsArray,
    ArrayNotEmpty,
    IsDate,
    IsOptional
} from 'class-validator';

export class CreateOfferDto {
    @IsString()
    title: string;

    @IsString()
    ContactType: string;
    
    @IsString()
    location: string;
    
    @IsString()
    description: string;

    @IsOptional()
    @IsDate()
    createdAt?: Date;
}
