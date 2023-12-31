
/// <reference types='cypress' />

import { faker } from '@faker-js/faker'
import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo Nome vazio', () => {
        cadastro_page.clicarCadastrar()  
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo Email vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
        
    })

    
    it('Campo Email Inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail('tatiana.com')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
            })

    
    it('Campo Senha vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        
    })

    
    it('Campo Senha inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        
    })

    it.only('Cadastro com sucesso', async () => {

        const name = await faker.person.fullName()

        cadastro_page.preencheNome(name)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha(1234567)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)
        
    })

})