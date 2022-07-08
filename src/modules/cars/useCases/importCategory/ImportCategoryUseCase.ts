
class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log("2", file)
  }
}

export {ImportCategoryUseCase}