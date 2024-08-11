import { Request, Response } from "express";

import { CreateUserService } from "../../services/user/CreateUserServer";

class CreateUserController {
  async handle(req: Request, res: Response) {
    //desconstruindo o json para repassar para o serviço
    const { name, email, password, age } = req.body;

    //instanciando
    const createUserService = new CreateUserService();
    //aguardando o serviço
    const user = await createUserService.execute({
      name,
      email,
      password,
      age,
    });

    return res.json(user);
  }
}

export { CreateUserController };
