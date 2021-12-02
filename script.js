/*let object = {};

function A()
{
    return object;
}
function B()
{
    return object;
}
alert( new A() == new B() )
*/


// -------------------Второе задание-------------------

/*function Fcalculator() {

    this.read = function() {
      this.a = +prompt('first element');
      this.b = +prompt('second element');
    };
  
    this.sum = function()
    {
      return this.a + this.b;
    };
  
    this.mul = function()
    {
      return this.a * this.b;
    };
  }
  
  let calculator = new Fcalculator();
  calculator.read();
  
  alert("Sum = " + calculator.sum());
  alert("Mul = " + calculator.mul());
  */

// -------------------Третье задание-------------------

  function FConstructor(firstValue) {
    this.value = firstValue;
    this.read = function()
    {
      this.value += +prompt('Сколько добавить?');
    };
  
  }
  
  let Constructor = new FConstructor(1);
  Constructor.read();
  Constructor.read();
  alert(Constructor.value);