let inventory =[];

function findProductIndex(productName) {
  productName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const productName = product.name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      inventory[i].quantity += product.quantity;
      console.log(productName + " quantity updated");
      return;
    }
  }

  inventory.push({
    name: productName,
    quantity: product.quantity
  });
  console.log(productName + " added to inventory");
}

function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {

      if (inventory[i].quantity < quantity) {
        console.log(
          "Not enough " +
          inventory[i].name +
          " available, remaining pieces: " +
          inventory[i].quantity
        );
        return;
      }

      inventory[i].quantity -= quantity;

      console.log(
        "Remaining " +
        productName +
        " pieces: " +
        inventory[i].quantity
      );

      if (inventory[i].quantity === 0) {
        inventory.splice(i, 1);
      }

      return;
    }
  }

  console.log(productName + " not found");
}
