const toy = {
  brand: "Legami",
  color: "black",
  material: "plastic",
  name: "Teacher",
  new: true,
};

//ACCESO
console.log(toy.name);
console.log(toy["name"]);

//CREAR
toy.price = 10;
console.log(toy);

//ACTUALIZAR O MODIFICAR
toy.new = false;
console.log(toy);

//DELETE
delete toy.color;
