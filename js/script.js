$(function () {
    // инициализация datetimepicker7 и datetimepicker8
    $("#datetimepicker7").datetimepicker({format: "DD-MM-YYYY"});
    $("#datetimepicker8").datetimepicker({
        format: "DD-MM-YYYY",
        useCurrent: false
    });
    $("#datetimepicker7").on("dp.change", function (e) {
    $('#datetimepicker8').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker8").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
    });
});

$('#buttonSend').click(function(){
    window.localStorage.clear();
    var res=0;
    var order={ surname:"-",
                name:"-",
                secondname:"-",
                dateStart:"-",
                dateFinish:"-",
                distance:"-",
                price:"-",
                delivery: "-",
                res: '-'          
            };
    var surname=$("#surname").val();
    var name=$("#name").val();
    var secondName=$("#secondName").val();
    var dateStart=$("#date-start").val();
    var dateFinish=$("#date-finish").val();
    var distance=$("#distance").val();
    var price=$("#price-per-kilometer").val();
    var radioLeft=$("radioLeft");
    var radioRight=$("radioRight");
    var delivery='';
    var resoult = $('input[type="radio"]:checked');
        if (resoult.lenght>0){
            delivery=resoult.val();
        }
    order.surname=surname;
    order.name=name;
    order.secondname=secondName;
    order.dateStart=dateStart;
    order.dateFinish=dateFinish;
    order.distance=distance;
    order.price=price;
    order.delivery=resoult.val();
    res=price*distance;
        if (resoult.val()=='Delivery to the office'){
            res+=40;
        }
        else if (resoult.val()=='Delivery to adress'){
            res+=60;
        }
    order.res=res.toFixed(2);
    localStorage.setItem('object_order',JSON.stringify(order));
    var loc= localStorage.getItem('object_order');
    document.location.href = "About_us.html";
});

$(document).ready(function(){
    $("#delivery").click(function(){
    $("#deliveryList").fadeToggle("1000");
    });
});

$(document).ready(function(){
    $("#exampleHeadContentItem2").click(function(){
        $("#exampleContentItemFirst2").fadeToggle("1000");
    });
});