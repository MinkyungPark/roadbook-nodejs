const order1 = new MakeOrder('오렌지 쥬스', '2500');
const order2 = new MakeOrder('토마토 주스', '3000');

// 정답
function MakeOrder(name, price) {
    this.name = name;
    this.price = price;
}