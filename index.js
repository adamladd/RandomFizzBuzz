var randomNumbers = document.getElementById("fiveRandomNumbers");
var fizzBuzzResults = document.getElementById('results');
var btn = document.getElementById('btn');

btn
    .addEventListener
        ("click", 
        () => {
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET', 'http://www.filltext.com/?rows=5&number={randomNumber|100}');
            ourRequest.onload = () => {
                var ourData = JSON.parse(ourRequest.responseText);
                render(ourData);
            }
            ourRequest.send();
        }
);

function render(data) {
    var htmlString = ''

    if (data.length === 5) {
        htmlString += '<h3> The numbers are in!</h3>'
        + '<h1>' + data[0].number + ', ' + data[1].number + ', ' + data[2].number + ', ' + data[3].number + ', ' + data[4].number + '</h1>'
        + '<p>Is it a Fizz?</p><p>Is it a Buzz?</p><p>Is it a FizzBuzz?</p><p>Or is it just a random number?</p>';
    }

    randomNumbers.insertAdjacentHTML('beforeend', htmlString);

    setTimeout(FizzBuzz, 15000);

    function FizzBuzz() {
        htmlString = '';
        for (i = 0; i < data.length; i++) {
            htmlString += "<p>" + data[i].number + " is ";
            if((data[i].number % 3) === 0 || (data[i].number % 5) === 0) {
                if((data[i].number % 3) === 0 && (data[i].number % 5) === 0){
                    htmlString += "a FizzBuzz!</p>";
                }
                else if((data[i].number % 3) === 0){
                    htmlString += "a Fizz!</p>";
                }
                else{
                    htmlString += "a Buzz!</p>";
                }
            }
            else{
                htmlString += " just " + data[i].number + '.';
            }
        }
        fizzBuzzResults.insertAdjacentHTML('beforeend', htmlString);
    }
}