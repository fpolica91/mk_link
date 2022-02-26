import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  avatarUrl: string;

  @Field()
  walletId: string;
}
