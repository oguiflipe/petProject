// Prisma: Conexão com o banco de dados.
import prismaClient from "../../prisma";

// interface para realizar a desconstrução.
interface UserRequest {
  name: string;
  email: string;
  password: string;
  age: string;
}

class CreateUserService {
  async execute({ name, email, password, age }: UserRequest) {
    // Verificar se enviou um e-mail válido.
    if (!email) {
      throw new Error("Email incorrect.");
    }

    // verificar se o e-mail está cadastrado na plataforma:
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    //Cadastrando o usuário no banco.
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        age: age,
      },
      //mostrando somente o que o usuário precisa saber, evitando enviar a senha e data de criação.
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
