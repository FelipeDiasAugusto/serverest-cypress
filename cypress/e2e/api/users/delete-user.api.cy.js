import UserService from '../../../services/UserService';
import { generateUser } from '../../../utils/userFactory';

describe('DELETE /usuarios/{id}', () => {
    const createAndDeleteUser = (user) => {
        let userId;

        return UserService.createUser(user)
            .then((createResponse) => {
                expect(createResponse.status).to.equal(201);

                expect(createResponse.body)
                    .to.have.property('_id')
                    .and.to.be.a('string')
                    .and.not.be.empty;

                userId = createResponse.body._id;

                return UserService.deleteUser(userId);
            })
            .then((deleteResponse) => {
                expect(deleteResponse.status).to.equal(200);

                expect(deleteResponse.body).to.have.property(
                    'message',
                    'Registro excluído com sucesso'
                );

                return UserService.getUserById(userId, false);
            })
            .then((getResponse) => {
                expect(getResponse.status).to.equal(400);

                expect(getResponse.body).to.have.property(
                    'message',
                    'Usuário não encontrado'
                );
            });
    };

    it('Deve excluir um usuário comum com sucesso', () => {
        const commonUser = generateUser(false);

        createAndDeleteUser(commonUser);
    });

    it('Deve excluir um usuário administrador com sucesso', () => {
        const adminUser = generateUser(true);

        createAndDeleteUser(adminUser);
    });
});