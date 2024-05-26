<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('assets/css/admin/login.css') }}" type="text/css" media="all" />
    <style>
        .ball {
            position: absolute;
            border-radius: 100%;
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div id="particles-js"></div>
    <div id="app"></div>
    <script src="{{ asset('assets/js/admin/login/particles.min.js') }}"></script>
    <script src="{{ asset('assets/js/admin/login/index.js') }}"></script>
    @viteReactRefresh
    @vite('resources/js/admin/app.jsx')

    <script>
        // Some random colors
        const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

        const numBalls = 100;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
            let ball = document.createElement("div");
            ball.classList.add("ball");
            ball.style.background = colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
            ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
            ball.style.transform = `scale(${Math.random()})`;
            ball.style.width = `${Math.random()}em`;
            ball.style.height = ball.style.width;

            balls.push(ball);
            document.body.append(ball);
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
            let to = {
                x: Math.random() * (i % 2 === 0 ? -11 : 11)
                , y: Math.random() * 2
            };

            let anim = el.animate(
                [{
                        transform: "translate(0, 0)"
                    }
                    , {
                        transform: `translate(${to.x}rem, ${to.y}rem)`
                    }
                ], {
                    duration: (Math.random() + 1) * 2000, // random duration
                    direction: "alternate"
                    , fill: "both"
                    , iterations: Infinity
                    , easing: "ease-in-out"
                }
            );
        });

    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
