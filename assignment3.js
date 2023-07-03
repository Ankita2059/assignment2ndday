const cylinder = {
    radius: 3,
    height: 6,
    calculateArea: function() {
      const area = Math.PI * Math.pow (this.radius,2)* this.height;
      return area.toFixed(2); // Return area with 2 decimal places
    }
  };
  
  
  const area = cylinder.calculateArea();
  console.log('The area of the cylinder is ${area} square units.');
  