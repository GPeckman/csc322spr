// Import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Adds smooth motion
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 200;

// Create scene
const scene = new THREE.Scene();

// Create a curve
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const points = [];
const segments = 100;  // Number of segments to approximate the curve
const scalefactor = 2;

/* 
Original equation: (x^2 + y^2)^2 - 4(x^2 - y^2) = 0
This can be converted to polar form by substituting in the following:
r^2 = x^2 + y^2
r^2 * cos(2 * theta) = x^2 - y^2
This gives the new equation: (r^2)^2 - 4(r^2 * cos(2 * theta)) = 0
Which simplifies to: r = 2 * sqrt(cos(2 * theta))
This means that the radius can be computed from theta and then plugged in
*/
for (let i = 0; i <= segments; i++) {
	const theta = (i / segments) * 2 * Math.PI;
	// Without the Math.max, NaNs leak in and cause issues
	const radius = scalefactor * Math.sqrt(Math.max(Math.cos(2 * theta), 0));
	const x = radius * Math.cos(theta);
	const y = radius * Math.sin(theta);
	points.push(new THREE.Vector3(x, y, 0));
}

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const curve = new THREE.Line(geometry, material);
scene.add(curve);

// Animation loop for rendering and controls update
function animate() {
	requestAnimationFrame(animate);
	controls.update();  // Required for damping to work
	renderer.render(scene, camera);
}

// Start the animation loop
animate();
