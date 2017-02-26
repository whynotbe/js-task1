/**
 * Created by luzhaolin on 2017/2/24.
 */
window.onload = function(){
    var bt1 = document.getElementById("bt1");
    bt1.onclick=function()
    {
        start = setInterval(changeColor,500);
    }


        var changeColor =function(){
        var allBlocks = getAllBlocks();
        for(var i = 0;i <allBlocks.length; i++)
        {
            allBlocks[i].style.backgroundColor = "orange";
        }
        var blocks = getRandomBlocks();
        for(var i = 0; i < blocks.length;i++)
        {
            blocks[i].style.backgroundColor = getcolor();
        }
    }
    var bt2 = document.getElementById("bt2");
    bt2.onclick = function()
    {
        clearInterval(start);
        var allBlocks = getAllBlocks();
        for(var i = 0;i <allBlocks.length; i++)
        {
            allBlocks[i].style.backgroundColor = "orange";
        }
    }
};


function getAllBlocks() {
    var a = document.getElementById("section1");
    var a1=a.getElementsByTagName("div");
    var blocks = [];
    for(var i = 0; i<a1.length;i++ )
    {
        blocks.push(a1[i]);
    }

    var b = document.getElementById("section2");
    var b1=b.getElementsByTagName("div");
    for(var i = 0; i<b1.length;i++ )
    {
        blocks.push(b1[i]);
    }

    var c = document.getElementById("section3");
    var c1=c.getElementsByTagName("div");
    for(var i = 0; i<c1.length;i++ )
    {
        blocks.push(c1[i]);
    }
    return blocks;

}


function  getRandomBlocks()
{
    var d =getAllBlocks();

    var e =Math.floor(Math.random()*(d.length));
    var a = d[e];
    d.splice(e,1);


    var f = [Math.floor(Math.random()*d.length)];
    var b = d[f];
    d.splice(f,1);

    var g = [Math.floor(Math.random()*d.length)];
    var c =d[g];
    d.splice(g,1);

    var h = [a,b,c];
    return h;

}

function getcolor(){
    var a = parseInt("FFFFFF",16);
    var b =(Math.floor(Math.random()*a)).toString(16);
    var c = "000000"+b;
    var d = "#" + c.substring(b.length,b.length+6);
    return d;
}