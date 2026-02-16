
// const users = [
//     { id: 101, name: 'Анатолий', age: 30 },
//     { id: 102, name: 'Юлия', age: 25 },
//     { id: 103, name: 'Игорь', age: 35 }
// ];


// const usersById = {};

// users.forEach(user => {
//     usersById[user.id] = user;
// });
// console.log(usersById);


const orders = [
    { orderId: 1, status: 'Обрабатывается' },
    { orderId: 2, status: 'Доставлен' },
    { orderId: 3, status: 'Обрабатывается' },
    { orderId: 4, status: 'Отменён' }
];

const groupedOrders = orders.reduce((acc, order) => {
    if (!acc[order.status]) { acc[order.status] = [] }
    acc[order.status].push(order); return acc },
    {});

console.log(groupedOrders);



