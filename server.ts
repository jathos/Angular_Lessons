import * as express from 'express';
import { getAllCourses } from './server/get-courses';

const app = express();

app.route('/api/courses').get(getAllCourses);

const httpServer = app.listen(9000, () => console.log("HTTP REST Server running at http://localhost:9000"));

