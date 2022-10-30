var faker = require('faker-br')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var cpf = faker.br.cpf()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: (cpf),
            email: faker.internet.email(firstName, lastName),
            whatsapp: '62999999999',
            address: {
                postalcode: '75144610',
                street: 'Avenida Matadouro Industrial',
                number: '050',
                details: 'Ap 142',
                district: 'Vila Fabril',
                city_state: 'Anápolis/GO'
            },
            delivery_method: 'Bike Elétrica',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}