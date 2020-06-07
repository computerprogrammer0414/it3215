/* Jaime Smith
Last updated on 06/07/2020 */
/* --------------------------- INITIATE VARIABLES --------------------------- */
        var images = [];
        var currentBannerImg = 0;
        var pause = false;
    
/* --------------------- FUNCTION TO PRELOAD ALL IMAGES --------------------- */

        function preloadAllImages() {
            // get the src of all images in docuemnt and then preload them
            for(var i = 0; i < images.length; i++) {
                var img = new Image();
                img.src = images[i].src;
            }
            console.log('Preloading completed!')
        }
    
/* ------------------------ FUNCTION TO CYCLE IMAGES ------------------------ */

        function cycleBanner() {
           // if paused, then don't do anything
            if(!pause) {
                // Hide all banner images
                for(var i = 0; i < images.length; i++) {
                    images[i].style.display = "none";
                }
               // increment the counter to next image
                currentBannerImg++;
                if(currentBannerImg == images.length) {
                    currentBannerImg = 0;
                }
                // make current image visible
                images[currentBannerImg].style.display = "block";
                console.log('Cycling through banner images')
            }
           // call the cycleBanner function after 3 seconds again, to make cycle
            setTimeout(cycleBanner, 3000);
        }

/* ------------------------- WINDOW ONLOAD FUNCTION ------------------------- */
            window.onload = function() {
            // find all images in document inside bannerImages section
            images = document.getElementById('bannerImages').getElementsByTagName('img');
    
            preloadAllImages();
            cycleBanner();

/* ----------------------- PAUSING CYCLE ON MOUSE OVER ---------------------- */
            document.getElementById('bannerImages').onmouseover = function(e) {
                pause = true;
                console.log('pausing')
            };
/* ------------------------ RESUME CYCLE ON MOUSEOUT ------------------------ */
            document.getElementById('bannerImages').onmouseout = function(e) {
                pause = false;
                console.log('resuming')
            };
        };