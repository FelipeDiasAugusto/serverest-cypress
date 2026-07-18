import UserService from '../../../services/UserService';
import { generateUser } from '../../../utils/userFactory';

describe('PUT /usuarios/{id}', () => {
    let createdUserId;

    afterEach(() => {
        if (createdUserId) {
            UserService.deleteUser(createdUserId, false);
        }

        createdUserId = undefined;
    });

    it('Deve alterar somente a senha do usuário com sucesso', () => {
        const originalUser = generateUser(false);

        const updatedUser = {
            ...originalUser,
            password: 'novaSenha123'
        };

        UserService.createUser(originalUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                createdUserId = createResponse.body._id;

                return UserService.updateUser(
                    createdUserId,
                    updatedUser
                );
            })
            .then((updateResponse) => {
                expect(updateResponse.status).to.equal(200);

                expect(updateResponse.body).to.have.property(
                    'message',
                    'Registro alterado com sucesso'
                );

                return UserService.getUserById(createdUserId);
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(200);

                expect(getResponse.body).to.include({
                    nome: originalUser.name,
                    email: originalUser.email,
                    password: updatedUser.password,
                    administrador: originalUser.administrator
                });

                expect(getResponse.body._id).to.equal(createdUserId);
            });
    });

    it('Deve alterar somente o nome do usuário com sucesso', () => {
        const originalUser = generateUser(false);

        const updatedUser = {
            ...originalUser,
            name: `Usuário Atualizado ${Date.now()}`
        };

        UserService.createUser(originalUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                createdUserId = createResponse.body._id;

                return UserService.updateUser(
                    createdUserId,
                    updatedUser
                );
            })
            .then((updateResponse) => {
                expect(updateResponse.status).to.equal(200);

                expect(updateResponse.body).to.have.property(
                    'message',
                    'Registro alterado com sucesso'
                );

                return UserService.getUserById(createdUserId);
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(200);

                expect(getResponse.body).to.include({
                    nome: updatedUser.name,
                    email: originalUser.email,
                    password: originalUser.password,
                    administrador: originalUser.administrator
                });

                expect(getResponse.body._id).to.equal(createdUserId);
            });
    });

    it('Deve alterar somente o e-mail do usuário com sucesso', () => {
        const originalUser = generateUser(false);

        const updatedUser = {
            ...originalUser,
            email: `usuario.atualizado.${Date.now()}@qa.com.br`
        };

        UserService.createUser(originalUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                createdUserId = createResponse.body._id;

                return UserService.updateUser(
                    createdUserId,
                    updatedUser
                );
            })
            .then((updateResponse) => {
                expect(updateResponse.status).to.equal(200);

                expect(updateResponse.body).to.have.property(
                    'message',
                    'Registro alterado com sucesso'
                );

                return UserService.getUserById(createdUserId);
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(200);

                expect(getResponse.body).to.include({
                    nome: originalUser.name,
                    email: updatedUser.email,
                    password: originalUser.password,
                    administrador: originalUser.administrator
                });

                expect(getResponse.body._id).to.equal(createdUserId);
            });
    });

    it('Deve alterar somente o perfil de usuário comum para administrador', () => {
        const originalUser = generateUser(false);

        const updatedUser = {
            ...originalUser,
            administrator: 'true'
        };

        UserService.createUser(originalUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                createdUserId = createResponse.body._id;

                return UserService.updateUser(
                    createdUserId,
                    updatedUser
                );
            })
            .then((updateResponse) => {
                expect(updateResponse.status).to.equal(200);

                expect(updateResponse.body).to.have.property(
                    'message',
                    'Registro alterado com sucesso'
                );

                return UserService.getUserById(createdUserId);
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(200);

                expect(getResponse.body).to.include({
                    nome: originalUser.name,
                    email: originalUser.email,
                    password: originalUser.password,
                    administrador: 'true'
                });

                expect(getResponse.body._id).to.equal(createdUserId);
            });
    });

    it('Deve alterar somente o perfil de administrador para usuário comum', () => {
        const originalUser = generateUser(true);

        const updatedUser = {
            ...originalUser,
            administrator: 'false'
        };

        UserService.createUser(originalUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                createdUserId = createResponse.body._id;

                return UserService.updateUser(
                    createdUserId,
                    updatedUser
                );
            })
            .then((updateResponse) => {
                expect(updateResponse.status).to.equal(200);

                expect(updateResponse.body).to.have.property(
                    'message',
                    'Registro alterado com sucesso'
                );

                return UserService.getUserById(createdUserId);
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(200);

                expect(getResponse.body).to.include({
                    nome: originalUser.name,
                    email: originalUser.email,
                    password: originalUser.password,
                    administrador: 'false'
                });

                expect(getResponse.body._id).to.equal(createdUserId);
            });
    });
});