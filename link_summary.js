setInterval(change_background, 1000*60);
        
            function change_background() {
                var d = new Date();
                var n = d.getHours();
                console.log(n);
                if (n > 18 || n < 6) {
                document.body.className = "night";
                } else {
                document.body.className = "day";
                }
            }
        
            change_background();