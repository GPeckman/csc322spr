// Import three.js
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

// Import orbit controls
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Setup camera
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 100, 100);
camera.lookAt(0, 70, 0);

const scene = new THREE.Scene();

// Set background color
renderer.setClearColor(0xffffff, 0);

// Define the geometry of the polyhedron
const scaleFactor = 1/10;
const baseWidth = 55 * scaleFactor;
const topWidth = 34 * scaleFactor;
const pyramidHeight = 55 * scaleFactor;
const totalHeight = 555 * scaleFactor;
const baseHeight = totalHeight - pyramidHeight;
const trapezoidSlope = 2 * baseHeight / (baseWidth - topWidth); // dy/dx
const trapezoidHeight = Math.sqrt(baseHeight**2 + ((baseWidth - topWidth) / 2)**2);
const triangleSlope = 2 * pyramidHeight / topWidth;
const triangleHeight = Math.sqrt(pyramidHeight**2 + (topWidth / 2)**2);

// Central pivot for everything to rotate around
const pivot = new THREE.Object3D();

// Make the Trapezoids
const trapezoidMat1 = new THREE.MeshBasicMaterial({color: new THREE.Color("aqua")});
const trapezoidMat2 = new THREE.MeshBasicMaterial({color: new THREE.Color("rgb(0, 0, 255)")});
const trapezoidMat3 = new THREE.MeshBasicMaterial({color: new THREE.Color(0, 255, 0)});
const trapezoidMat4 = new THREE.MeshBasicMaterial({color: 0xff0000});

const trapezoidShape = new THREE.Shape();
trapezoidShape.moveTo(-baseWidth / 2, 0);
trapezoidShape.lineTo(-topWidth / 2, trapezoidHeight);
trapezoidShape.lineTo(topWidth / 2, trapezoidHeight);
trapezoidShape.lineTo(baseWidth / 2, 0);
trapezoidShape.lineTo(-baseWidth / 2, 0);
const trapezoidGeometry = new THREE.ShapeGeometry(trapezoidShape);

const trapezoid1 = new THREE.Mesh(trapezoidGeometry, trapezoidMat1);
trapezoid1.position.set(0, 0, baseWidth / 2);
trapezoid1.rotateX(Math.atan(trapezoidSlope) - Math.PI / 2);
pivot.add(trapezoid1);

const trapezoid2 = new THREE.Mesh(trapezoidGeometry, trapezoidMat2);
trapezoid2.position.set(baseWidth / 2, 0, 0);
trapezoid2.rotateY(Math.PI / 2);
trapezoid2.rotateX(Math.atan(trapezoidSlope) - Math.PI / 2);
pivot.add(trapezoid2);

const trapezoid3 = new THREE.Mesh(trapezoidGeometry, trapezoidMat3);
trapezoid3.position.set(0, 0, -baseWidth / 2);
trapezoid3.rotateY(Math.PI);
trapezoid3.rotateX(Math.atan(trapezoidSlope) - Math.PI / 2);
pivot.add(trapezoid3);

const trapezoid4 = new THREE.Mesh(trapezoidGeometry, trapezoidMat4);
trapezoid4.position.set(-baseWidth / 2, 0, 0);
trapezoid4.rotateY(3 * Math.PI / 2);
trapezoid4.rotateX(Math.atan(trapezoidSlope) - Math.PI / 2);
pivot.add(trapezoid4);

// Make the triangles
const triangleMat1 = new THREE.MeshBasicMaterial({color: 0xffff00});
const triangleMat2 = new THREE.MeshBasicMaterial({color: 0xff00ff});
const triangleMat3 = new THREE.MeshBasicMaterial({color: 0xAAAAAA});
const triangleMat4 = new THREE.MeshBasicMaterial({color: 0x555555});

const triangleShape = new THREE.Shape();
triangleShape.moveTo(-topWidth / 2, 0);
triangleShape.lineTo(0, triangleHeight);
triangleShape.lineTo(topWidth / 2, 0);
triangleShape.lineTo(-topWidth / 2, 0);
const triangleGeometry = new THREE.ShapeGeometry(triangleShape);

const triangle1 = new THREE.Mesh(triangleGeometry, triangleMat1);
triangle1.position.set(0, baseHeight, topWidth / 2);
triangle1.rotateX(Math.atan(triangleSlope) - Math.PI / 2);
pivot.add(triangle1);

const triangle2 = new THREE.Mesh(triangleGeometry, triangleMat2);
triangle2.position.set(topWidth / 2, baseHeight, 0);
triangle2.rotateY(Math.PI / 2);
triangle2.rotateX(Math.atan(triangleSlope) - Math.PI / 2);
pivot.add(triangle2);

const triangle3 = new THREE.Mesh(triangleGeometry, triangleMat3);
triangle3.position.set(0, baseHeight, -topWidth / 2);
triangle3.rotateY(Math.PI);
triangle3.rotateX(Math.atan(triangleSlope) - Math.PI / 2);
pivot.add(triangle3);

const triangle4 = new THREE.Mesh(triangleGeometry, triangleMat4);
triangle4.position.set(-topWidth / 2, baseHeight, 0);
triangle4.rotateY(3 * Math.PI / 2);
triangle4.rotateX(Math.atan(triangleSlope) - Math.PI / 2);
pivot.add(triangle4);

// Animate and render
scene.add(pivot);

var animate = function () {
    pivot.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

var controls = new OrbitControls (camera, renderer.domElement);
animate();
