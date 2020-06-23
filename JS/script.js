function love_calc()
{

    var score = Math.ceil(Math.random() * 100);

    var your_name = document.querySelectorAll("input")[0].value;
    var partner_name = document.querySelectorAll("input")[0].value;

    if(your_name === "" && partner_name === "")
    {
        document.querySelectorAll("h4")[1].innerHTML = "Please enter your name and your partner's name";
    }
    else if(score <= 25)
    {
        document.querySelectorAll("h4")[0].innerHTML = score;
        document.querySelectorAll("h4")[1].innerHTML = "Hard luck dear!";
    }
    else if(score > 25 && score <= 50)
    {
        document.querySelectorAll("h4")[0].innerHTML = score;
        document.querySelectorAll("h4")[1].innerHTML = "You need to install Tinder";
    }
    else if(score > 50 && score <= 75)
    {
        document.querySelectorAll("h4")[0].innerHTML = score;
        document.querySelectorAll("h4")[1].innerHTML = "That's great!";
    }
    else if(score > 75 && score <= 100)
    {
        document.querySelectorAll("h4")[0].innerHTML = score;
        document.querySelectorAll("h4")[1].innerHTML = "SoulMates!";
    }
    else
    {
        document.querySelectorAll("h4")[1].innerHTML = "Do your job man there are alot of better things to do!";
    }

}