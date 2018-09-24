var timenow1=0;

$( document ).ready(function() {
    console.log( "rey!" );
    timenow1=Date.now();
    timenow2=new Date();
    console.log("timenow");
});

type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocumentationCharts: function() {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);
    },

    initDashboardPageCharts: function() {

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);



        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);


        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
            }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function(value) {
                        return value[0];
                    }
                }
            }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);

    },

    initGoogleMaps: function() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "saturation": 43
                }, {
                    "lightness": -11
                }, {
                    "hue": "#0088ff"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function(from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }



}








$(document).on('click','#addloc', function(){
    var panelno =$('#numpanelsform').find("#numpanels").val(); 

var locname= $('#numpanelsform').find("#locname").val(); 
console.log(locname);

var loctab=""
/*
$('.sidebar-wrapper').find('.nav').append()

      <div class="sidebar-wrapper">
                <ul class="nav">
                    <li class="active">
                        <a href="dashboard.html">
                            <i class="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </a>


                    </li>
                    */
    
});


/*

$(document).on('click','#card1', function(){
    console.log("ffff")
   // $( "#card1" ).css( "background", "red");
   $( "#card1" ).attr( "backgroundColor", "red");
});

*/

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  if(s<10)
    s='0'+s;
  if(m<10)
    m='0'+m;
  if(h<10)
    h='0'+h;
  return { d: d, h: h, m: m, s: s };
};

/*
var panelinfo, date, time, dtime=[],uptime=[],laststate=[1,1,1,1],lasttime=[0,0,0,0],created=[],panelslno,panno,now=[], numnotify=1;

setInterval(function(){
    $.ajax({
  url: "../ajax.php",
  type:"POST",
  data:{ status: "a"}
}).done(function(data) {

    panelinfo=JSON.parse(data);
    panno=panelinfo[0];
    panelslno="#card"+panno;
   console.log(data);

  
   date=panelinfo[2].split('-');
   time=panelinfo[3].split(':');

    dtime[panno]= new Date(date[2], date[1]-1, date[0], time[0], time[1], time[2]);
    now[panno]=dtime[panno].getTime();
 


  if(panelinfo[1]==1)
  {
        innerif:
        if(lasttime[panno]==0)
        {
            break innerif;
        }
        else
        {
        if(laststate[panno]==0)
        {

            $( panelslno ).data( "background-color", "red");
            $( panelslno ).css( "background", "linear-gradient(60deg, #ef5350, #e53935)");
            $( panelslno ).find('i').text( "info_outline");


        
        uptime[panno]=convertMS(now[panno]-lasttime[panno]);
        lasttime[panno]=0;
       
      
       $('#paneltable').append('<tr><td>' + panelinfo[0] + '</td> <td>' + created[panno] + '</td> <td>' + panelinfo[2] + ' ' + panelinfo[3] +'</td> <td class="text-primary">' + uptime[panno].d+'d ' +uptime[panno].h+'h '+uptime[panno].m+'m '+uptime[panno].s+'s' + '</td></tr>');
        $(panelslno+"-stats span").text( uptime[panno].d+"d " + uptime[panno].h+"h "+uptime[panno].m+"m "+uptime[panno].s+"s" );

       
       $(".dropdown-menu").append('<li><a href="#">' + 'Device with ID: ' + panelinfo[0] + ' was removed on ' + panelinfo[2] + ' at '+ panelinfo[3] + '</a></li>');
       numnotify++;
       $('.notification').text(numnotify);
        $('.notification').toggle(true);
    }
    }
        laststate[panno]=1;    

  }
  else{

    if(laststate[panno]==1)
    {

         $( panelslno ).data( "background-color", "green");

         $( panelslno ).css( "background", "linear-gradient(60deg, #66bb6a, #43a047)");
          $( panelslno ).find('i').text( "check_circle_outline");
        created[panno]= panelinfo[2] + ' ' + panelinfo[3];
        lasttime[panno]=now[panno];
         $(panelslno+"-title").text(created[panno]);

         numnotify++;
         $('.notification').text(numnotify);
          $('.notification').toggle(true);
          $(".dropdown-menu").append('<li><a href="#">' + 'Device with ID: ' + panelinfo[0] + ' was added on ' + panelinfo[2] + ' at '+ panelinfo[3] + '</a></li>');
    }
 
    laststate[panno]=0;

  }

});
}, 1000);
*/

$(document).click(function(event) { 
    if(!$(event.target).closest('#notification').length) {
         $("#notification-list").empty();
        }        
});

$(document).on('click','#notifications',function(){
    $('.notification').text("0");
    numnotify=0;
    $('.notification').toggle(false);


    if($('.notification').is(":visible"))
    {
        $("#notification-list").empty();
    }

})



/*

var panelslno,createmill=[], totalmill,uptime,numnotify=1,created=[];
function panel(panelinfo)
{
    panelslno="#card"+panelinfo.device_id;
    console.log(panelslno);
    if(panelinfo.status == 0)
    {
        $( panelslno ).data( "background-color", "green");
        $(panelslno).css( "background", "linear-gradient(60deg, #66bb6a, #43a047)");
        $(panelslno).find('i').text( "check_circle_outline");
         $(panelslno+"-title").text(panelinfo.date+ '.'+ panelinfo.month+ '.' + panelinfo.year+ '  ' + panelinfo.hour +':' + panelinfo.minutes +':' + panelinfo.seconds );
        createmill[panelinfo.device_id]=panelinfo.totmili;
        created[panelinfo.device_id]=panelinfo.date+ '.'+ panelinfo.month+ '.' + panelinfo.year+ '  ' + panelinfo.hour +':' + panelinfo.minutes +':' + panelinfo.seconds;
        numnotify++;
         $('.notification').text(numnotify);
          $('.notification').toggle(true);
          $(".dropdown-menu").append('<li><a href="#">' + 'Device with ID: ' + panelinfo.device_id + ' was added on ' +  panelinfo.date+ '.'+ panelinfo.month+ '.' + panelinfo.year + ' at '+ panelinfo.hour +':' + panelinfo.minutes +':' + panelinfo.seconds + '</a></li>');
    }

    else{
         $( panelslno ).data( "background-color", "red");
            $( panelslno ).css( "background", "linear-gradient(60deg, #ef5350, #e53935)");
            $( panelslno ).find('i').text( "info_outline");
            totalmill=panelinfo.totmili-createmill[panelinfo.device_id];
            uptime=convertMS(totalmill);
            $(panelslno+"-stats span").text( uptime.d+"d " + uptime.h+"h "+uptime.m+"m "+uptime.s+"s" );
            $('#paneltable').append('<tr><td>' + panelinfo.device_id + '</td> <td>' + created[panelinfo.device_id] + '</td> <td>' + panelinfo.date+ '.'+ panelinfo.month+ '.' + panelinfo.year+ '  ' + panelinfo.hour +':' + panelinfo.minutes +':' + panelinfo.seconds +'</td> <td class="text-primary">' + uptime.d+'d ' +uptime.h+'h '+uptime.m+'m '+uptime.s+'s' + '</td></tr>');
             $(".dropdown-menu").append('<li><a href="#">' + 'Device with ID: ' + panelinfo.device_id + ' was removed on ' + panelinfo.date+ '.'+ panelinfo.month+ '.' + panelinfo.year + ' at '+ panelinfo.hour +':' + panelinfo.minutes +':' + panelinfo.seconds + '</a></li>');
       numnotify++;
       $('.notification').text(numnotify);
        $('.notification').toggle(true);
    }
}

*/


var panelslno,createmill=[], totalmill,uptime,numnotify=1,created=[],laststate=[1,1,1,1];

function panel(panelinfo)
{
    panelslno="#card"+panelinfo.device_id;
    console.log(panelslno);
    

    if (true)
    {
        

            $( panelslno ).data( "background-color", "red");
            $( panelslno ).css( "background", "linear-gradient(60deg, #ef5350, #e53935)");
            $( panelslno ).find('i').text( "info_outline");
            totalmill=panelinfo.totmili-timenow1;
            uptime=convertMS(totalmill);
            $(panelslno+"-stats span").text( uptime.d+"d " + uptime.h+"h "+uptime.m+"m "+uptime.s+"s" );
            $('#paneltable').append('<tr><td>' + panelinfo.device_id + '</td> <td>' + timenow2.getDate()+'.'+(timenow2.getMonth()+1)+'.'+timenow2.getFullYear()+" " +timenow2.getHours()+":"+ timenow2.getMinutes()+":"+timenow2.getSeconds()+ '</td> <td>' + panelinfo.date+ '.'+ panelinfo.month+ '.' + panelinfo.year+ '  ' + panelinfo.hour +':' + panelinfo.minutes +':' + panelinfo.seconds +'</td> <td class="text-primary">' + uptime.d+'d ' +uptime.h+'h '+uptime.m+'m '+uptime.s+'s' + '</td></tr>');
            $(".dropdown-menu").append('<li><a href="#">' + 'Device with ID: ' + panelinfo.device_id + ' was removed on ' + panelinfo.date+ '.'+ panelinfo.month+ '.' + panelinfo.year + ' at '+ panelinfo.hour +':' + panelinfo.minutes +':' + panelinfo.seconds + '</a></li>');
            numnotify++;
            $('.notification').text(numnotify);
            $('.notification').toggle(true);
        
    }
}






var panelinfo;
// , date, time, dtime=[],uptime=[],laststate=[1,1,1,1],lasttime=[0,0,0,0],created=[],panelslno,panno,now=[], numnotify=1;
var data;
var ws = new WebSocket("wss://www.mqtest.cf:3000");
ws.onopen = function() {
console.log("Connected with socket");
};
ws.onmessage = function(payload) {
    panelinfo=payload.data;
    panelinfo = JSON.parse(panelinfo);
console.log(panelinfo);
   panel(panelinfo);
 
    
};
ws.onclose = function() {
console.log("Disconnected");

};
    
