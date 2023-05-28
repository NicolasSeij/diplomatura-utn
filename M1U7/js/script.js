function medioDeTransporte(distancia) {
    if (distancia <= 1000) {
      return "pie";
    } else if (distancia <= 10000) {
      return "bicicleta";
    } else if (distancia <= 30000) {
      return "colectivo";
    } else if (distancia <= 100000) {
      return "auto";
    } else {
      return "avion";
    }
  }
  
 
  console.log(medioDeTransporte(500));     // Output: pie
  console.log(medioDeTransporte(5000));    // Output: bicicleta
  console.log(medioDeTransporte(20000));   // Output: colectivo
  console.log(medioDeTransporte(50000));   // Output: auto
  console.log(medioDeTransporte(150000));  // Output: avion

  
  function encontrarMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
    return mayor;
  }
  

  let array1 = [3, 9, 2, 5, 1];
  console.log(encontrarMayor(array1));  
  
  let array2 = [-1, -5, -10, -3];
  console.log(encontrarMayor(array2));    
  
  let array3 = [100, 200, 50, 300];
  console.log(encontrarMayor(array3));    