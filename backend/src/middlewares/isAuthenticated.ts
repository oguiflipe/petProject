import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
  sub: string;
}

//Criando a função para autenticar o usuario pela senha
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //coleta a senha passada pelo usuario
  const authToken = req.headers.authorization;

  //valida se a senha está correta
  if (!authToken) {
    return res.status(401).end();
  }

  //desconstruindo transformando em uma array e coletando somente a senha
  const [, token] = authToken.split(" ");

  // validando a senha do usuário
  try {
    const { sub } = verify(token, process.env.SECRET_JWT) as PayLoad;

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
