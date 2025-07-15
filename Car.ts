class Car{
    static cars : Car[] = [];
 
    constructor(private carModel:string,private carPrice:number,private carBrand:string){
        Car.cars.push(this);
    }
 
    get carmodel(){
        return this.carModel;
    }
 
    get carprice(){
        return this.carPrice;
    }
 
    get carbrand(){
        return this.carBrand;
    }
 
    static getCarCount(): number {
        return Car.cars.length;
    }
 
    static display(){
        this.cars.forEach((car, index) => {
            console.log(`${index + 1}. ${car.carBrand} ${car.carModel} - ${car.carPrice}`);
        });
    }
}
 
let car1 = new Car("car1", 121, "brand1");
let car2 = new Car("car2", 7487, "brand2");
let car3 = new Car("car3", 658, "brand3");
let car4 = new Car("car4", 488, "brand4");
 
console.log(`Total cars ${Car.getCarCount()}`);
Car.display();