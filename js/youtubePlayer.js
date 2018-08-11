$(document).ready(function(){
    // Sample Url
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=z6hQqgvGI4Y&type=video&videoDefinition=high&key=AIzaSyACVGRogzrd_OCytWCZf5fwHKO28ReWaTM
    
    vidManager = {
        baseUrl:"https://www.googleapis.com/youtube/v3/search?part=snippet",
        apiKey:"AIzaSyACVGRogzrd_OCytWCZf5fwHKO28ReWaTM",
        initVid:"z6hQqgvGI4Y",

        vids: [
            'cjmbJmbIMtY',
            '0uBOtQOO70Y',
            'A71aqufiNtQ',
            'OK_JCtrrv-c',
            'TlB_eWDSMt4',
            '9gTw2EDkaDQ',
            'XYDbq5YfoqI',
        ],
        
        url:baseUrl+"&"+"key="+apiKey+"&q="+q,
        
        init: function() {
            this.sideLinksBind();
            this.getVideo(this.initVid);
        },
        
        sideLinksBind: function() {
            $('#home-sidelinks').on('click', function(e){
                console.log('Clicked');
            });
        },
        
        
        getVideo: function(id) {   
            console.log('URL: ' + thisurl);
            $.get(url, function(data){
                vid=data.items[0].id.videoId;
                vtitle=data.items[0].snippet.title;
                vdesc=data.items[0].snippet.description;
                vthumb=data.items[0].snippet.thumbnails.default;
            });
        }, 
        
        updateTitle: function(title) {
            $('#vid')
        }
    };
});
