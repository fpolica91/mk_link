import { User } from "src/entity/User";
import { Mutation, Resolver, Arg, ObjectType, Field } from "type-graphql";
import { UserInput } from "src/utils/input/UserInput";
import { Wallet } from "src/entity/Wallet";

@ObjectType()
export class NewUser {
  @Field({ nullable: true })
  user: User;
  @Field()
  wallet: Wallet;
}

@Resolver(() => User)
export class UserMutations {
  @Mutation(() => NewUser)
  async createUser(@Arg("user") userInput: UserInput): Promise<NewUser> {
    try {
      const { walletId, email } = userInput;
      const wallet = await Wallet.create({
        walletId,
      }).save();

      if (!email) {
        return {
          wallet,
          user: null,
        };
      }

      const newUser = {
        ...userInput,
        wallet,
      };
      const user = await User.create(newUser).save();
      return {
        user,
        wallet,
      };
    } catch (err) {
      console.log("que me mamen el bicho  🐛", err);
    }
  }
}
