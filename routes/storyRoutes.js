import express from 'express';
import { upload } from '../config/multer.js';
import { protect } from '../middleware/auth.js';
import { addUserStory, getStories } from '../controllers/storyController.js';

const storyRouter = express.Router();
storyRouter.post('/create', protect, upload.single('media'), addUserStory);
storyRouter.get('/', protect, getStories);

export default storyRouter;
