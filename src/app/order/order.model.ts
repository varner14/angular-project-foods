class Order {
  constructor(public address: string,
    public number: string,
    public optionalAddress: string,
    public paymentOptions: string,
    public orderItems: Orderitem[]) { }

}

class Orderitem {
  constructor(public quantity: number, public menuId: string) {

  }
}

export { Order, Orderitem }

