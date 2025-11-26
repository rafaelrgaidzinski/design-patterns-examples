// // Exemplo Ruim: Alto acoplamento, difícil trocar implementações
// class MySQLDatabase {
//     salvar(dados) {
//       console.log(`Salvando no MySQL: ${dados}`);
//     }
// }
  
// class GerenciadorUsuarios {
//     constructor() {
//         this.database = new MySQLDatabase(); // Depende de implementação concreta
//     }
//     salvarUsuario(usuario) {
//         this.database.salvar(usuario);
//     }
// }

// Exemplo Bom: baixo acoplamento, fácil trocar implementações

// Classe base abstrata "Database" que define um contrato para classes filhas
class Database {
    salvar(dados) {
        throw new Error('Implementar na classe concreta');
    }
}

// Classe que implementa a classe base "Database" e define a lógica para o MySQL
class MySQLDatabase extends Database {
    salvar(dados) {
        console.log(`Salvando no MySQL: ${dados}`);
    }
}

// Classe que implementa a classe base "Database" e define a lógica para o MongoDB
class MongoDBDatabase extends Database {
    salvar(dados) {
        console.log(`Salvando no MongoDB: ${dados}`);
    }
}

// Classe que gerencia os usuários, independentemente do tipo de banco de dados
class GerenciadorUsuarios {

    // Construtor que recebe um banco de dados (pode ser MySQL ou MongoDB)
    constructor(database) {
        this.database = database;  
    }

    // Método que salva o usuário no banco de dados, chamando o método 'salvar' do banco
    salvarUsuario(usuario) {
        this.database.salvar(usuario);
    }
}

// Cria uma instância do banco de dados MySQL
const mysqlDatabase = new MySQLDatabase();

// Cria uma instância do banco de dados MongoDB
const mongoDBDatabase = new MongoDBDatabase();

// Cria um gerenciador de usuários que usa o banco MySQL
const gerenciadorMySQL = new GerenciadorUsuarios(mysqlDatabase);

// Cria um gerenciador de usuários que usa o banco MongoDB
const gerenciadorMongoDB = new GerenciadorUsuarios(mongoDBDatabase);

// Chama o método salvarUsuario para salvar um usuário no MySQL
gerenciadorMySQL.salvarUsuario('Usuário MySQL');

// Chama o método salvarUsuario para salvar um usuário no MongoDB
gerenciadorMongoDB.salvarUsuario('Usuário MongoDB');
