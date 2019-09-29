import {TRoutesInput} from '../types/routes';
import UserController from '../controllers/user.controller';

export default ({app}: TRoutesInput) => {
    app.post('/api/user', async (req, res) => {
        const user = await UserController.CreateUser({
            name: req.body.name,
            email: req.body.email
        });

        return res.send({user});
    });
};
