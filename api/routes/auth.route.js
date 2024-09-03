import express from 'express';
const router = express.Router();
import {google, signup , signin } from '../controller/auth.controller.js';

router.post('/signup' , signup);

router.post('/signin' , signin);

router.post('/google' , google);

export default router;