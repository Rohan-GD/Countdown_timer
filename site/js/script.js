function addone(){
            var no = document.getElementById('op').innerHTML;
            no ++;
            document.getElementById('op').innerHTML = no;
        }
        function subtractone(){
            var no = document.getElementById('op').innerHTML;
            no --;
            document.getElementById('op').innerHTML = no;
        }
        function reset(){
            var no = document.getElementById('op').innerHTML;
            document.getElementById('op').innerHTML = 25;
        }
        var counter = 25;
        function start(){setInterval(function(){

            counter --;
            if(counter >=0){
            var no = document.getElementById('op').innerHTML;
            document.getElementById('op').innerHTML = counter;}
            else
                {alert('sorry, out of time');
                counter = 25;}
        },500);}