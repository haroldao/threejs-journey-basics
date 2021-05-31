import './style.css';
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Blue Cube
const geometry =new THREE.BoxGeometry(1, 1, 1),
      material = new THREE.MeshBasicMaterial({color: 'blue'}),
      mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, 1, 4)

scene.add(mesh);


//Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

//Sizes
const sizes = {
    width: 800,
    height: 600
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);
// console.log(mesh.position.distanceTo(camera.position));

// Renderer
const canvas = document.querySelector('canvas.scene');
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
  canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);