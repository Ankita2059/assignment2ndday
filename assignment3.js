const cylinder = {
    radius: 7,
    height: 7,
    Area: function() {
      const pi = Math.PI;
      const area = pi * Math.pow(this.radius, 2) * this.height;
      return area.toFixed(3); 
  };
  //for Output
  console.log(`The area of the cylinder is: ${cylinder.Area()}`);