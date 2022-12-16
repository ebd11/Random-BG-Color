
let $colorButton = $("#color_button"),
$currentColorRGB = ("#current_color"),
$container = ("#container"),
$paragraph = ("p");

$colorButton.one("click", () => {
    $($container).css("background-color", "white")
    $($paragraph).css("color", "black")
})

$colorButton.on('click', () => {
    let $x = Math.floor(Math.random() * 256),
    $y = Math.floor(Math.random() * 256),
    $z = Math.floor(Math.random() * 256),
    $randomRGB = $x + ", " + $y + ", " + $z;

    $("body").css("background-color", `rgb(${$randomRGB})`);
    $($currentColorRGB).text(`(${$randomRGB})`);
    $($colorButton).css("background-color", `rgb(${$randomRGB})`)
    $($colorButton).css("color", "white")
})





