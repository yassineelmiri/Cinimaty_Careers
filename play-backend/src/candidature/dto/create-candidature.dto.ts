import {
    IsString,
    IsInt,
    IsArray,
    ArrayNotEmpty,
    IsDate,
    IsOptional
} from 'class-validator';

export class CreateCandidatureDto {
    @IsString()
    cv: string;

    @IsString()
    status: string;

    @IsInt()
    notes: number;

    
    @IsString()
    Users: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    Offers: string[];


    @IsOptional()
    @IsDate()
    createdAt?: Date;
}
