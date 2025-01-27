// Import three.js
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

// Setup camera
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
// Tweaked camera angle to better display the tetrahedron
camera.position.set(-50, 50, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

// Set background color
renderer.setClearColor(0xffffff, 0);

// Create the tetrahedron
const material = new THREE.LineBasicMaterial({color: 0x000000});
function makeTriangle(p1, p2, p3) {
	let points = [];
  points.push(new THREE.Vector3(p1[0], p1[1], p1[2]));
	points.push(new THREE.Vector3(p2[0], p2[1], p2[2]));
	points.push(new THREE.Vector3(p3[0], p3[1], p3[2]));
	points.push(new THREE.Vector3(p1[0], p1[1], p1[2]));
  let geometry = new THREE.BufferGeometry().setFromPoints(points);
  let triangle = new THREE.Line(geometry, material);
  scene.add(triangle);
}

function makeTetrahedron(p1, p2, p3, p4) {
	let points = [p1, p2, p3, p4];
  for (let i = 0; i < points.length; i++) {
  	let triangleBuffer = [];
  	for (let j = 0; j < points.length; j++) {
    	if (i != j) {
				triangleBuffer.push(points[j]);
      }
    }
    makeTriangle(...triangleBuffer);
  }
}

//makeTriangle([-10, 0, 0], [0, 5, 5], [10, 0, 0])
makeTetrahedron([-20, 0, 0], [0, 20, 20], [20, 0, 0], [0, 0, 20]);

// Render the scene
renderer.render(scene, camera);