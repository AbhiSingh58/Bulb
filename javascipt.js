
const image = document.getElementById("img")
        const onb = document.getElementById("on")
        const offb = document.getElementById("off")
        onb.addEventListener("click", () => {
            if (image.src.match("of")) {
                image.src = "pic_bulbon.gif";

                console.log("hi")
            }
        })

        offb.addEventListener("click", () => {
            if (image.src.match("on")) {
                image.src = "bulbof.gif"
                console.log("hey")
            }



        })
