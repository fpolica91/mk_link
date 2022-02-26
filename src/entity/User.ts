import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Wallet } from "./Wallet";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid", { name: "user_id" })
  id: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ nullable: true })
  avatarUrl: string;

  @Field()
  @Column({ unique: true, nullable: false })
  email: string;

  @OneToOne((type) => Wallet, (wallet) => wallet.user)
  @JoinColumn()
  wallet: Wallet;
}
