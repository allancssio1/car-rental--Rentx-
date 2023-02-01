import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppErrors } from "../../../../../errors/AppErrors";
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
    @inject("UsersRepository")
    private userRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppErrors("Email or passward incorrect", 404);

    const passwardMatch = compare(password, user.password);

    if (!passwardMatch) throw new AppErrors("Email or passward incorrect", 404);

    // o primeira opção podem ser dados do cliente, mas nunca a senha.
    // o segundo é o hashMD5 para deração do token. pesquisar em um site para gerar um aleatório
    //
    const token = sign({}, "69c6e4a394b794ac45a4ca63761bff01", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        email: user.email,
        name: user.name,
      },
    };

    return tokenReturn;
  }
}
