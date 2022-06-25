import { Specification } from "../models/Especification";

interface ISpecificationRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create ({name, description} : ISpecificationRepositoryDTO): void;
  findByName(name: string): Specification
}

export { ISpecificationRepository, ISpecificationRepositoryDTO };