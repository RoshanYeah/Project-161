AFRAME.registerComponent("bowling", {
    schema:{
        
    },
    init:function(){
        this.createBowlingBalls()
    },
    createBowlingBalls: function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key === " "){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.3
                })
                ball.setAttribute("material","color","black")
                var cam = document.querySelector("#camera")
                var pos = cam.getAttribute("position")
                ball.setAttribute("position",{x:pos.x,y:pos.y-0.5,z:pos.z})

                var cameras = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                cameras.getWorldDirection(direction);
                ball.setAttribute("velocity",direction.multiplyScalar(-7))
                var scene = document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})