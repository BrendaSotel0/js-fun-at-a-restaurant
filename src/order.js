function takeOrder(order, toGo) {
  if (toGo.length < 3) {
    toGo.push(order)
  }
  return toGo;
}

function refundOrder(orderNum, allOrders) {
  for (var i = 0; i < allOrders.length; i++) {
    if (allOrders[i].orderNumber === orderNum) {
      allOrders.splice(i, 1)
    }
  }
}

function listItems(orderNames) {
  var orderItems = [];
  for (var i = 0; i < orderNames.length; i++) {
    orderItems.push(orderNames[i].item);
  }
  return orderItems.join(", ");
}

function searchOrder(orderList, itemName) {
  var verify = false;
  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].item === itemName) {
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
