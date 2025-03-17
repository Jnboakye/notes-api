import { Router } from "express"
import { getNotes, postNotes } from "../controllers/note_controller.js";
import { registerUser } from "../controllers/user_controllers.js";

// creating mote routesn
const notesRouter = Router();

//Defining the routes
notesRouter.get('/notes', getNotes);
notesRouter.post('/notes', postNotes)

notesRouter.post('/users', registerUser)


//exporting router
export default notesRouter;