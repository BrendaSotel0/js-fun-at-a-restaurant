function takeOrder(order, array) {
  if (array.length < 3) {
    array.push(order)
  }
  return array
}

function refundOrder(orderNum, orderArray) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].orderNumber === orderNum) {
      orderArray.splice(i, 1)
    }
  }
}

function listItems(orderArray) {
  var orderItems = [];
  for (var i = 0; i < orderArray.length; i++) {
    orderItems.push(o m);
  }
  return orderItems.join(", ");
}

function searchOrder(array, item) {
  var verify = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i].item === item) {
      verify = true;
    }
  }
  return verify;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
