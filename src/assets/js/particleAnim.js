const createAnim = () => {
    //Do whatever you want now the element is there
    if (!document.querySelector('canvas')) {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        let windowWidth = (canvas.width = window.innerWidth)
        let windowHeight = (canvas.height = window.innerHeight)
        let element = document.querySelector('.wd-void-animation')
        /**/ canvas.id = 'canvas'
        /**/ element.append(canvas)
        /* ---- CORE END ---- */
        /* ---- SETTINGS ---- */
        /**/ const numberParticlesStart = 500
        const particleSpeed = 0.3
        const velocity = 0.9
        const circleWidth = 250
        const highlight = new Array(
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255)
        )

        /* ---- CREATING ZONE ---- */

        /* ---- INIT ---- */
        let particles = []

        const getRandomFloat = (min, max) => Math.random() * (max - min) + min

        /* ---- Particle ---- */
        function Particle(x, y) {
            this.x = x
            this.y = y

            this.vel = {
                x: getRandomFloat(-20, 20) / 100,
                y: getRandomFloat(-20, 20) / 100,
                min: getRandomFloat(2, 10),
                max: getRandomFloat(10, 100) / 10,
            }

            this.color = 'rgba(173, 202, 214, 0.1)'
        }
        Particle.prototype.render = function () {
            context.beginPath()
            context.fillStyle = this.color
            context.strokeStyle =
                'rgba(' +
                highlight[0] +
                ',' +
                highlight[1] +
                ',' +
                highlight[2] +
                ',0.2)'
            // context.strokeStyle = 'rgba(0, 110, 114, .5)';
            context.arc(this.x, this.y, 0.5, 0, Math.PI * 2)
            context.fill()
            context.lineWidth = 0.2
            context.stroke()
        }
        Particle.prototype.update = function () {
            const forceDirection = {
                x: getRandomFloat(-1, 1),
                y: getRandomFloat(-1, 1),
            }

            if (Math.abs(this.vel.x + forceDirection.x) < this.vel.max) {
                this.vel.x += forceDirection.x
            }
            if (Math.abs(this.vel.y + forceDirection.y) < this.vel.max) {
                this.vel.y += forceDirection.y
            }

            this.x += this.vel.x * particleSpeed
            this.y += this.vel.y * particleSpeed

            if (Math.abs(this.vel.x) > this.vel.min) {
                this.vel.x *= velocity
            }
            if (Math.abs(this.vel.y) > this.vel.min) {
                this.vel.y *= velocity
            }

            this.testBorder()
        }
        Particle.prototype.testBorder = function () {
            if (this.x > windowWidth) {
                this.setPosition(this.x, 'x')
            } else if (this.x < 0) {
                this.setPosition(windowWidth, 'x')
            }
            if (this.y > windowHeight) {
                this.setPosition(this.y, 'y')
            } else if (this.y < 0) {
                this.setPosition(windowHeight, 'y')
            }
        }
        Particle.prototype.setPosition = function (pos, coor) {
            if (coor === 'x') {
                this.x = pos
            } else if (coor === 'y') {
                this.y = pos
            }
        }

        /* ---- Functions ----*/
        function loop() {
            let i
            const length = particles.length
            for (i = 0; i < length; i++) {
                particles[i].update()
                particles[i].render()
            }
            requestAnimationFrame(loop)
        }

        /* ---- START ---- */
        function init() {
            let i
            for (i = 0; i < numberParticlesStart; i++) {
                const angle = Math.random() * 360
                particles.push(
                    new Particle(
                        windowWidth * 0.5 + Math.cos(angle) * circleWidth,
                        windowHeight * 0.5 - Math.sin(angle) * circleWidth
                    )
                )
            }
        }
        init()
        window.onresize = () => {
            windowWidth = canvas.width = window.innerWidth
            windowHeight = canvas.height = window.innerHeight
            particles = []
            context.clearRect(0, 0, windowWidth, windowHeight)
            init()
        }

        window.addEventListener('click', () => {
            particles = []
            context.clearRect(0, 0, windowWidth, windowHeight)
            init()
        })

        loop()
    }
}
export default createAnim
