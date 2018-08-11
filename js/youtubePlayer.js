$(document).ready(function(){
    // Sample Url
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=z6hQqgvGI4Y&type=video&videoDefinition=high&key=AIzaSyACVGRogzrd_OCytWCZf5fwHKO28ReWaTM
    
    vidManager = {
        baseUrl="https://www.googleapis.com/youtube/v3/search?part=snippet",
        apiKey="AIzaSyACVGRogzrd_OCytWCZf5fwHKO28ReWaTM",
        initVid="z6hQqgvGI4Y",

        $('header-nav li a').on('click', getVvideo(e));


        url=baseUrl+"&"+"key="+apiKey+"&q="+q;
        console.log('URL: ' + url);
        function getVideo(vid) {   
            $.get(url, function(data){
                vid=data.items[0].id.videoId;
                vtitle=data.items[0].snippet.title;
                vdesc=data.items[0].snippet.description;
                vthumb=data.items[0].snippet.thumbnails.default;
            });
        }
    };
});
