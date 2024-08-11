import { Router } from "express";
import multer from "multer";

import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserControler } from "./controllers/user/DetailUserContoller";
import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

// Multer é utilizado para armazenar os arquivos de fotos em uma pasta
const upload = multer(uploadConfig.upload("./tmp"));

// -- ROTAS DE USERS --

//criando usuário
router.post("/users", new CreateUserController().handle);

//-- ROTA DE LOGIN --
router.post("/session", new AuthUserController().handle);

//-- ROTA PARA BUSCAR OS DADOS DO USUÁRIO LOGADO --
router.get("/userinfo", isAuthenticated, new DetailUserControler().handle);

//-- ROTA PARA AS CATEGORIAS --

//-- ROTA DE PRODUTOS --

export { router };
