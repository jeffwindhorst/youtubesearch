$(document).ready(function(){
    // Sample Url
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=z6hQqgvGI4Y&type=video&videoDefinition=high&key=AIzaSyACVGRogzrd_OCytWCZf5fwHKO28ReWaTM
    
    var vidManager = {
        baseUrl: "https://www.googleapis.com/youtube/v3/search?part=snippet",
        apiKey: "AIzaSyACVGRogzrd_OCytWCZf5fwHKO28ReWaTM",
        vidData: [],
        
        vids: [
            'cjmbJmbIMtY',
            '0uBOtQOO70Y',
            'A71aqufiNtQ',
            'OK_JCtrrv-c',
            'TlB_eWDSMt4',
            '9gTw2EDkaDQ',
            'XYDbq5YfoqI'
        ],
        
        init: function() {
            this.sideLinksBind();
            console.log('LENGTH ' + this.vidData.length);
            for(i=0; i<this.vids.length; i++) {
                console.log(this.vids[i]);
                this.getVideo(this.vids[i]);
            }
        },
        
        buildSideLinks() {
            {
                this.vids.forEach(function(el) {
                    // $('#home-sidelinks').append(<li><a class="smoothscroll" href="#about">About<span>who we are</span></a></li>')
                });
            };
        },
        
        sideLinksBind: function() {
            $('#home-sidelinks').on('click', function(e){
                console.log('Clicked');
            });
        },
        
        
        getVideo: function(id) {   
            
            url=this.baseUrl+"&"+"key="+this.apiKey+"&q="+id
            console.log('URL: ' + url);
            $.get(url, function(data){
                vid = data.items[0].id.videoId;
                vtitle = data.items[0].snippet.title;
                vdesc = data.items[0].snippet.description;
                vthumb = data.items[0].snippet.thumbnails.default.url;
                vwidth = data.items[0].snippet.thumbnails.default.width;
                vheight = data.items[0].snippet.thumbnails.default.height;
                
                $('.home-sidelinks').append("<li><img src='"+vthumb+"' width='"+vwidth+"' height='"+vheight+"'><a class='smoothscroll' href='" + vid + "'>" + vtitle + "</a></li>");
            });
        }, 
        
        updateTitle: function(title) {
            $('#vid')
        }
    };
    vidManager.init();
});

