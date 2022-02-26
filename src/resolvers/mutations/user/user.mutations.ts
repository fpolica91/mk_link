import { User } from "../../../entity/User";
import { Mutation, Resolver, Arg } from "type-graphql";
import { UserInput } from "../../../utils/input/UserInput";
import { Repository } from "typeorm";

@Resolver(() => User)
export class UserMutations {
  @Mutation(() => User)
  async createUser(@Arg("user") userInput: UserInput): Promise<User> {
    try {
      return await User.create(userInput).save();
    } catch (err) {
      console.log("que me mamen el bicho bug 🐛", err);
    }
  }
}
