// Exemplo Ruim: Classe Cart tem um método pay, mas se comunica diretamente com o PaymentGateway,
// criando um acoplamento forte e dificultando a mudança de gateway de pagamento no futuro.
// class Cart {
//     pay(amount) {
//      
//         paymentGateway.process(amount);
//     }
// }


// Exemplo Bom:

//  A interface do Gateway que define a estrutura que todos os gateways de pagamento devem seguir
class PaymentGateway {
    process(amount) {
        // Método abstrato que deve ser implementado em subclasses específicas de gateways
        throw "Método process() deve ser implementado em subclasses.";
    }
}

// Um exemplo de Gateway e implementação concreta do método process para o PayPal
class PayPalGateway extends PaymentGateway {
    
    process(amount) {
        console.log(`Processando pagamento de R$ ${amount} através do PayPal.`);
    }
}

// Um exemplo de Gateway e implementação concreta do método process para o Stripe
class StripeGateway extends PaymentGateway {
    
    process(amount) {
        console.log(`Processando pagamento de R$ ${amount} através do Stripe.`);
    }
}

// Classe PaymentService, que recebe qualquer PaymentGateway 
class PaymentService {
    constructor(gateway) {
        this.gateway = gateway; // A dependência do gateway é injetada aqui
    }
    // O PaymentService delega o processamento de pagamento para o gateway passado
    pay(amount) {
        this.gateway.process(amount); // Chama o método process do gateway
    }
}

// Classe Cart, que agora usa o PaymentService para realizar o pagamento
class Cart {
    constructor(paymentService) {
        this.paymentService = paymentService; // A dependência do PaymentService é injetada
    }
    // O Cart chama o método pay do PaymentService sem se preocupar com o tipo de gateway
    pay(amount) {
        this.paymentService.pay(amount);
    }
}

// Criando os objetos de Gateway com suas respectivas implementações
const paypalGateway = new PayPalGateway();
const stripeGateway = new StripeGateway();

// Criando o PaymentService para cada tipo de gateway
const paypalService = new PaymentService(paypalGateway);
const stripeService = new PaymentService(stripeGateway);

// Criando o Cart para cada tipo de PaymentService
const cartWithPayPal = new Cart(paypalService);
const cartWithStripe = new Cart(stripeService);


// Realizando o pagamento com diferentes Gateways
cartWithPayPal.pay(150); 
cartWithStripe.pay(250); 

