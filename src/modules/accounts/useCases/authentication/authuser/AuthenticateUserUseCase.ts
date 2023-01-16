import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error("Email or passward incorrect");

    const passwardMatch = compare(password, user.password);

    if (!passwardMatch) throw new Error("Email or passward incorrect");

    // o primeira opção podem ser dados do cliente, mas nunca a senha.
    // o segundo é o hashMD5 para deração do token. pesquisar em um site para gerar um aleatório
    //
    const token = sign({}, "69c6e4a394b794ac45a4ca63761bff01", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user,
      token,
    };
  }
}
