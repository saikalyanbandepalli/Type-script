class Temperature {
  private _celsius: number = 0;
 
  
  constructor(celsius: number) {
    this.celsius = celsius; 
  }
 
 
  set celsius(value: number) {
   
      this._celsius = value;
    
  }
 
  get fahrenheit(): number {
    return this._celsius * 9 / 5 + 32;
  }
 
  
  show(): void {
    console.log(`Celsius: ${this._celsius}`);
    console.log(`Fahrenheit: ${this.fahrenheit}`);
  }
}
 

 
const temp1 = new Temperature(25);
temp1.show();
 

temp1.celsius = -300; 

temp1.celsius = 100;
temp1.show();