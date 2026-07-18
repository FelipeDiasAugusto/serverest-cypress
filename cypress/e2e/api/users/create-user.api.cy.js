import UserService from '../../../services/UserService';
import { generateUser } from '../../../utils/userFactory';

describe('POST /usuarios', () => {
    let createdUserIds;

    beforeEach(() => {
        createdUserIds = [];
    });

    afterEach(() => {
        cy.wrap(createdUserIds).each((userId) => {
            UserService.deleteUser(userId, false);
        });
    });

    it('Deve criar um usuário comum com sucesso', () => {
        const newUser = generateUser(false);

        UserService.createUser(newUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                expect(createResponse.body).to.have.property(
                    'message',
                    'Cadastro realizado com sucesso'
                );

                expect(createResponse.body)
                    .to.have.property('_id')
                    .and.to.be.a('string')
                    .and.not.be.empty;

                createdUserIds.push(createResponse.body._id);

                return UserService.getUserById(
                    createResponse.body._id
                );
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(200);

                expect(getResponse.body).to.include({
                    nome: newUser.name,
                    email: newUser.email,
                    password: newUser.password,
                    administrador: 'false'
                });
            });
    });

    it('Deve criar um usuário administrador com sucesso', () => {
        const newAdminUser = generateUser(true);

        UserService.createUser(newAdminUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                expect(createResponse.body).to.have.property(
                    'message',
                    'Cadastro realizado com sucesso'
                );

                expect(createResponse.body)
                    .to.have.property('_id')
                    .and.to.be.a('string')
                    .and.not.be.empty;

                createdUserIds.push(createResponse.body._id);

                return UserService.getUserById(
                    createResponse.body._id
                );
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(200);

                expect(getResponse.body).to.include({
                    nome: newAdminUser.name,
                    email: newAdminUser.email,
                    password: newAdminUser.password,
                    administrador: 'true'
                });
            });
    });

    it('Não deve criar um usuário com e-mail duplicado', () => {
        const existingUser = generateUser(false);

        UserService.createUser(existingUser)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                createdUserIds.push(createResponse.body._id);

                return UserService.createUser(
                    existingUser,
                    false
                );
            })
            .then((duplicateResponse) => {
                expect(duplicateResponse.status).to.equal(400);

                expect(duplicateResponse.body).to.have.property(
                    'message',
                    'Este email já está sendo usado'
                );
            });
    });

    it('Não deve criar um usuário sem os campos obrigatórios', () => {
        const userWithoutRequiredFields = {
            name: '',
            email: '',
            password: '',
            administrator: ''
        };

        UserService.createUser(
            userWithoutRequiredFields,
            false
        ).then((response) => {
            expect(response.status).to.equal(400);

            expect(response.body).to.have.property('nome');
            expect(response.body).to.have.property('email');
            expect(response.body).to.have.property('password');
            expect(response.body).to.have.property('administrador');
        });
    });
});