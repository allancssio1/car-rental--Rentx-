import { Specification } from "../models/Especification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[]

  constructor () {
    this.specifications = []
  }

  create({ name, description }: ISpecificationRepositoryDTO): void {
    const specification = new Specification()

    Object.assign(specification, { name, description, createdAt: new Date() })

    this.specifications.push(specification) 
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name)
    return specification
  }
}

export {SpecificationRepository}