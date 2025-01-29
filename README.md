# README

## Descritivo de Requisitos

### RF

- [ ] Usuário deve poder escolher um cartão
- [ ] Usuário deve poder realizar simulações (Pontos, Gestão de Pontos e Simulador)
- [ ] Usuário deve poder ver o histórico de simulações realizadas (Filtrando por: Tipo, Período e Cartão)
- [ ] Usuário deve poder decidir se quer receber avisos por e-mail (Futuramente: Informar outro e-mail para receber avisos)

### RNF

- [ ] O sistema deve buscar a cotação do dólar a cada 5 minutos
- [ ] O sistema deve ter bandeiras pré cadastradas pelo admin
- [ ] O sistema deve ter os cartões pré cadastradas pelo admin
- [ ] O sistema deve mostrar um avatar com a inicial do usuário (Futuramente: Avatar Desenhado escolhido pelo Usuário)

### RN

- [ ] O cadastro de cotação do dólar deve salvar o valor da cotação e a data/hora da busca
- [ ] O cadastro de cartão deve conter Nome, Instituição, Bandeira, Taxa de Conversão de Pontos/Dólar
- [ ] O cadastro da escolha de um cartão pelo usuário deve ter a referência de qual cartão e um apelido
- [ ] O usuário não pode ter mais de 3 cartões ligados à ele (Futuramente: plano premium liberando quantidade ilimitada)

## Todo List

### Autenticação

- [x] Criação de usuário via e-mail
- [x] Criação de usuário via google
- [ ] Criação de usuário via facebook

- [x] Authenticação de usuário via e-mail
- [x] Authenticação de usuário via google
- [ ] Authenticação de usuário via facebook

- [x] Proteção da aplicação para usuário logado
- [x] Proteção do admin para usuário logado e com permissões administrativas

- [ ] Melhorias na Experiência do Usuário
- [ ] Melhorias Visuais

### Banco de dados

- [ ] Tabela Bandeira
- [ ] Tabela Cartão
- [ ] Tabela Cartão Usuário
- [ ] Tabela Dólar
- [ ] Tabela Simulação

### Funcionalidades da Aplicação (Cadastros, Cálculos)

#### Admin

- [ ] Cadastro de Bandeira
- [ ] Cadastro de Cartão

#### Usuario

- [ ] Escolha de Cartão
- [ ] Realização de Simulação

### Funcionalidades de Usuário (Histórico, Perfil)

- [ ] Listagem de Simulações
- [ ] Habilitar recebimento de avisos via e-mail

### Feedback e Melhorias Visuais

### Testes

### Deploy

### Teste Em Produção
