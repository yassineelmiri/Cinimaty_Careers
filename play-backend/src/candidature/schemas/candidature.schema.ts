import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Candidature extends Document {
  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  notes: number;

  @Prop({ required: true })
  cv: string;

  @Prop({ type: [String], default: [] })
  Offers: string[];

  @Prop({ required: true })
  Users: string;
  
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CandidatureSchema = SchemaFactory.createForClass(Candidature);
