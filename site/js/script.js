function addone()
    {
        var no = document.getElementById('op').innerHTML;
         no ++;
         document.getElementById('op').innerHTML = no;
    }
function subtractone()
    {
        var no = document.getElementById('op').innerHTML;
         no --;
        document.getElementById('op').innerHTML = no;
    }

        
 function start()
    {
        var counter = document.getElementById('op').innerHTML;
        var myvar = setInterval(function(){
            counter --;
            if(counter >=0)
            {
            var no = document.getElementById('op').innerHTML;
            document.getElementById('op').innerHTML = counter;
            }
            else
                {
                    alert('sorry, out of time');
                    reset();
                    clearInterval(myvar);
                }
        },500);
    }
    function reset()
    {
        document.getElementById('op').innerHTML = 25;
    }
    