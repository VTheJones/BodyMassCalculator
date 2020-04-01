var Younes = {
      // I Started by declaring 
        firstName:'Younes', 
        lastName:'Jones', 
        age: 21, 
        height: 1.82, 
        mass: 76,
      // The Body mass calculator 
      calcMass: function() { 
          this.Bmi = this.mass / (this.height * this.height);
          return this.Bmi;
      }
}
      
      
      // doing the same for the other side of the comparaison
      
var Malkom = {      
      // I Started by declaring 
        firstName:'Malkom', 
        lastName:'Conner', 
        age: 22, 
        height: 1.85, 
        mass: 83,
      // The Body mass calculator 
      calcMass: function() { 
          this.Bmi = this.mass / (this.height * this.height);
      return this.Bmi;
      }
}      
      if (Younes.calcMass() > Malkom.calcMass()) {
      console.log('Younes Body mass is ' + Younes.Bmi + ' and it bigger then Malkom/s');}

      else if (Malkom.Bmi > Younes.Bmi) { 
      console.log('Malkom Body mass is ' + Malkom.Bmi + ' and it bigger then Younes/s');}
          
      else {
      console.log('They have the same BMI');
      }
    
