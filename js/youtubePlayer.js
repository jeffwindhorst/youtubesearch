$(document).ready(function(){
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    
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
                this.getVideo(this.vids[i]);
            }
            $('.home-sidelinks').on('click', 'a', function(e){
                e.preventDefault(); e.stopPropagation();
                $('#video-title').text('TITLE: ' + $(this).data('title'));
                $('#video-description').text('DESCRIPTION: ' + $(this).data('description'));
            });
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
                vtitle = data.items[0].snippet.title.replaceAll('"', '');
                vdesc = data.items[0].snippet.description.replaceAll('"','');
                vthumb = data.items[0].snippet.thumbnails.default.url;
                vwidth = data.items[0].snippet.thumbnails.default.width;
                vheight = data.items[0].snippet.thumbnails.default.height;
                
                $('.home-sidelinks').append("<li><a class='smoothscroll' href='" + vid + "' data-title='"+vtitle+"' data-description='"+vdesc+"' data><span>" + vtitle + "</span><img src='"+vthumb+"' width='"+vwidth+"' height='"+vheight+"'></a></li>");
            });
        }, 
        
        updatePlayer: function(vId, vTitle, vDesc) {
            iFrame="<iframe width='560' height='315' src='https://www.youtube.com/embed/'+vid+'?rel=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
            $('player-content').append(iFrame);
            $('video-title').text(vTitle);
            $('video-description').text(vDesc);
        }
    };
    vidManager.init();
});

