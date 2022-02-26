import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn("uuid", { name: "wallet_id" })
  id: string;

  @Column({ unique: true })
  walletId: string;

  @OneToOne((type) => User, (user) => user.wallet)
  user: User;
}
