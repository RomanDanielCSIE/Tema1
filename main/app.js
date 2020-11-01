function removeOrderItem(orderInfo, position){
     
    if(orderInfo.items.constructor===Array){}
    else{throw "Items should be an array";} 
    
    for(var i=0;i<orderInfo.items.length;i++){
    if(orderInfo.items[i].quantity && orderInfo.items[i].price){}
    else{throw"Malformed item";}
    }
    
    /*orderInfo.items.forEach( element=> {
    if( !element.hasOwnProperty('price') || !element.hasOwnProperty('quantity')){
     throw"Malformed item";
    }
    }); */
    if(position >0 && position <= orderInfo.items.length){} 
    else {throw "Invalid position";} 
    
    /*if(orderInfo.items['price'] !== undefined && orderInfo.items['quantity'] !== undefined){;} 
    else { return orderInfo;} */
    
    orderInfo.items.splice(position,1);
    orderInfo.total=0;
    for(var i=0;i<orderInfo.items.length;i++){
        orderInfo.total+= orderInfo.items[i].quantity * orderInfo.items[i].price;
    }
    return orderInfo;
    
    
    }
    
    const app = {
        removeOrderItem
    };
    
    module.exports = app;
    