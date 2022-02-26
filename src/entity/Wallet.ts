import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  BaseEntity,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@Entity()
@ObjectType()
export class Wallet extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid", { name: "wallet_id" })
  id: string;

  @Field()
  @Column({ unique: true })
  walletId: string;

  @OneToOne((type) => User, (user) => user.wallet)
  user: User;
}
