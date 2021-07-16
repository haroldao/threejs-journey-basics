import './style.css';
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

// Canvas
const canvas = document.querySelector('canvas.scene');

// Group
const group = new THREE.Group();
group.position.set(1, 1, 0);
group.rotation.set(0, 1, 0);
scene.add(group);

// Cube 1 for group
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x0000ff
  })
);
group.add(cube1);

// Cube 2 for group
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x00ff00
  })
);
cube2.position.set(-2, 0, 0);
group.add(cube2);

// Cube 3 for group
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0xffff00
  })
);
cube3.position.set(2, 0, 0);
group.add(cube3);

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
camera.position.z = 3;
scene.add(camera);
// console.log(mesh.position.distanceTo(camera.position));
// camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);