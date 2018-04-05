$(document).ready(function(){
    var order=localStorage.getItem('object_order');
    var object_order=JSON.parse(order);
    console.log("Object_order", object_order);
    $("#valsurname").text(object_order.surname);
    $("#valname").text(object_order.name);
    $("#valsecondname").text(object_order.secondname);
    $("#valdatestart").text(object_order.dateStart);
    $("#valdatefinish").text(object_order.dateFinish);
    $("#valdistance").text(object_order.distance);
    $("#valpriceperkm").text(object_order.price);
    $("#valdelivery").text(object_order.delivery);
    $("#valprice").text(object_order.res);    
})