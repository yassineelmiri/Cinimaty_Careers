import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Offer extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  ContactType: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
