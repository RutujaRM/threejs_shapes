 // Set up the scene
 const scene = new THREE.Scene();

 // Set up the camera
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.z = 5;

 // Set up the renderer
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth * 0.6, window.innerHeight);
 document.getElementById('canvas-container').appendChild(renderer.domElement);

 // Create shapes
 const shapes = {};

 // Cube
 const cubeGeometry = new THREE.BoxGeometry();
 const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
 const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
 shapes['cube'] = cube;

 // Sphere
 const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
 const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
 const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
 shapes['sphere'] = sphere;

 // Pyramid (Tetrahedron)
 const pyramidGeometry = new THREE.TetrahedronGeometry();
 const pyramidMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
 const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
 shapes['pyramid'] = pyramid;

 // Cone
 const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
 const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
 const cone = new THREE.Mesh(coneGeometry, coneMaterial);
 shapes['cone'] = cone;

 // Function to show a specific shape
 function showShape(shapeName) {
     // Clear the scene
     while (scene.children.length > 0) {
         scene.remove(scene.children[0]);
     }

     // Add the selected shape
     if (shapes[shapeName]) {
         scene.add(shapes[shapeName]);
     }

     renderer.render(scene, camera);
 }

 // Initial render
 renderer.render(scene, camera);

 // Update renderer and camera on window resize
 window.addEventListener('resize', () => {
     const width = window.innerWidth * 0.6;
     const height = window.innerHeight;

     renderer.setSize(width, height);
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
 });