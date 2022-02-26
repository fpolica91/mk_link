import { Resolver, Query, Arg, ObjectType, Field } from "type-graphql";
import { User } from "src/entity/User";
import { Wallet } from "src/entity/Wallet";

@ObjectType()
export class UserData {
  @Field({ nullable: true })
  user: User;
  @Field()
  wallet: Wallet;
}

@Resolver()
export default class UserResolver {
  @Query(() => UserData)
  async getUser(@Arg("id") id: string): Promise<UserData> {
    try {
      const userData = await Wallet.findOneOrFail({
        where: {
          walletId: id,
        },
        relations: ["user"],
      });

      return {
        user: userData.user ?? null,
        wallet: userData,
      };
    } catch (err) {
      console.log("que me mamen el bicho  🐛", err);
    }
  }
}
