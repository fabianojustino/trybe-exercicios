
    const order = {
      name: 'Rafael Andrade',
      phoneNumber: '11-98763-1416',
      address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
      },
      order: {
        pizza: {
          marguerita: {
            amount: 1,
            price: 25,
          },
          pepperoni: {
            amount: 1,
            price: 20,
          }
        },
        drinks: {
          coke: {
            type: 'Coca-Cola Zero',
            price: 10,
            amount: 1,
          }
        },
        delivery: {
          deliveryPerson: 'Ana Silveira',
          price: 5,
        }
      },
      payment: {
        total: 60,
      },
    };
    
    const customerInfo = (order) => {
      // Adicione abaixo as informações necessárias.
      const employee = order.order.delivery.deliveryPerson;
      const name = order.name;
      const phone = order.phoneNumber;
      const msg = 'entrega para';
      const address =
        `${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`;
    
      //console.log( `Ola ${employee}, ${msg}: ${name}, Telefone: ${phone}, ${address}`);
    
    }
    
    customerInfo(order);
    
    const orderModifier = (order) => {
      const name = order.name= 'Luiz Silva';
      const phone = order.phoneNumber;
      const msg = 'o total do seu pedido de';   
      const foods =Object.keys(order.order.pizza);   
      const drinks = order.order.drinks.coke.type;

      const chaveFood= foods[0];
             
      console.log( `Ola ${name}, ${msg}: ${foods[0]}, ${foods[1]} ${drinks} é R$ ${order.order.payment='50'},00.`);
    
    }
    
    orderModifier(order);
    
    