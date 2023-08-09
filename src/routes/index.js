import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./auth.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PATH_ROUTES = __dirname;

fs.readdirSync(PATH_ROUTES).filter((file) => {
  if (file !== "index.js") {
    import(`./${file}`, (moduleRouter) => {
      router.use(`./${file}`, moduleRouter.router);
    });
  }
});

export default router;
