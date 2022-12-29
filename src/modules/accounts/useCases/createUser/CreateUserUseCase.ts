import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    password,
    username,
    driver_license,
    email,
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      name,
      password,
      username,
      driver_license,
      email,
    });
  }
}
