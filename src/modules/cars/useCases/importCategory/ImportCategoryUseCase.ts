import {parse} from 'csv-parse'
import fs from 'fs'

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path)
    /* csv-parse é uma lib para auxiliar na manipulação do arquivo
      ele pode receber um tipo de limitador que irá separar o arquivo a partir deste.
      por padrão ele ja entende que o limitador é a ',' (vírgula)
      parse({";"}) */
    const parseFile = parse()

    stream.pipe(parseFile)

    parseFile.on("data", async (line) => {
      console.log("filllll", line)
    })
  }
}

export {ImportCategoryUseCase}