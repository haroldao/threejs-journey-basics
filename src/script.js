import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// EventListener resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight,
    // update camera
    camera.aspect = sizes.width / sizes.height,
    camera.updateProjectionMatrix(),
    // update renderer
    renderer.setSize(sizes.width, sizes.height)
    //set pixel ratio
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// EventListener fullscren if else
window.addEventListener('dblclick', () => {
    //check if safari, Mozilla (for fullscreen compatibility)
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement

    if (fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen()  
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
        console.log('you not fullscreen')
    }
    else {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
            console.log('you fullscreen')
        }
        else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
            console.log('you webkit fullscreen')
        }
    }
})

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const aspectRatio = sizes.width / sizes.height

/**
 * ¨Perspective camera	
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

const cursor = {
    x: 0,
    y: 0
}

// move camera potion with the mouse
document.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = - (e.clientY / sizes.height- 0.5) 
})

camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)
    

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
