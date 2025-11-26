// // Exemplo Ruim: Toda vez precisa modificar para incluir um novo tipo
// class CalculadoraDesconto {
//     calcular(cliente, valor) {
//         if (cliente.tipo === 'regular') {
//         return valor * 0.9;
//         } else if (cliente.tipo === 'vip') {
//         return valor * 0.8;
//         }
//         // Para novo tipo, tem que editar aqui 
//         return valor;
//     }
// }

// Exemplo Bom: basta criar uma nova classe para cada tipo novo

// Classe base Cliente, que define o comportamento padrão de cálculo de desconto
class Cliente {
    calcularDesconto(valor) {
        return valor; 
    }
}

// Classe ClienteRegular, que herda de Cliente e aplica 10% de desconto
class ClienteRegular extends Cliente {
    calcularDesconto(valor) {
        return valor * 0.9; 
    }
}

// Classe ClienteVIP, que herda de Cliente e aplica 20% de desconto
class ClienteVIP extends Cliente {
    
    calcularDesconto(valor) {
        return valor * 0.8;
    }
}

// Classe ClienteGold, que herda de Cliente e aplica 30% de desconto
class ClienteGold extends Cliente {
    
    calcularDesconto(valor) {
        return valor * 0.7; 
    }
}

// Classe CalculadoraDesconto, que utiliza o método calcularDesconto de qualquer cliente
class CalculadoraDesconto {
    
    calcular(cliente, valor) {
        return cliente.calcularDesconto(valor); 
    }
}

// Instancia um objeto de ClienteRegular, que aplica 10% de desconto
const clienteRegular = new ClienteRegular();

// Instancia um objeto de ClienteVIP, que aplica 20% de desconto
const clienteVIP = new ClienteVIP();

// Instancia um objeto de ClienteGold, que aplica 30% de desconto
const clienteGold = new ClienteGold();

// Definindo um valor de compra para o cálculo dos descontos
const valorCompra = 1000; 

// Instancia a calculadora de descontos
const calculadora = new CalculadoraDesconto();

// Calcula o desconto para o cliente regular
const descontoRegular = calculadora.calcular(clienteRegular, valorCompra);

// Calcula o desconto para o cliente VIP
const descontoVIP = calculadora.calcular(clienteVIP, valorCompra);

// Calcula o desconto para o cliente Gold
const descontoGold = calculadora.calcular(clienteGold, valorCompra);

// Exibe os resultados dos descontos para cada tipo de cliente
console.log(`Desconto Cliente Regular: R$ ${descontoRegular}`); 
console.log(`Desconto Cliente VIP: R$ ${descontoVIP}`); 
console.log(`Desconto Cliente Gold: R$ ${descontoGold}`);
