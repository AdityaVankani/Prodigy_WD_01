document.addEventListener('mousemove', (e) => {
    const follower = document.querySelector('#follower');
    const mouseX = e.pageX;
    const mouseY = e.pageY;
  
    follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  gsap.to(".leftele", {
    scrollTrigger: {
      trigger: "#window",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: .5,
    },
    y: "-300%",
    ease: Power1,
  });

  gsap.to(".x", {
    scrollTrigger: {
      trigger: "#right",
      pin: true,
      start: "top top ",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
  
  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
  
    // Create a plane geometry and load the texture (image)
    const geometry = new THREE.PlaneGeometry(5, 3); // Adjust size as needed
    const texture = new THREE.TextureLoader().load('https://t3.ftcdn.net/jpg/04/03/37/76/360_F_403377697_rTuVgduJgmgm3hrShiPbUAc91aJKte2b.jpg');
  
    // Create a shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0.0 },
        u_texture: { value: texture }
      },
      vertexShader: `
        varying vec2 v_uv;
        void main() {
          v_uv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform sampler2D u_texture;
        varying vec2 v_uv;
        void main() {
          vec2 uv = v_uv;
          uv.y += sin(uv.x * 10.0 + u_time) * 0.1;
          gl_FragColor = texture2D(u_texture, uv);
        }
      `,
      transparent: true
    });
  
    // Create a mesh and add it to the scene
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  
    // Position the camera
    camera.position.z = 5;
  
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      material.uniforms.u_time.value += 0.05;
      renderer.render(scene, camera);
    }
  
    animate();
  
    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  });
  

  // GSAP animation setup
gsap.registerPlugin("to");

// Magnet effect setup
const magnets = document.querySelectorAll(".magnet");

magnets.forEach(magnet => {
  magnet.addEventListener("mouseenter", e => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // mouse position relative to the element
    const mouseY = e.clientY - rect.top; // mouse position relative to the element

    gsap.to(e.target, {
      duration: 0.2,
      x: 0,
      y: 0,
      ease: "power2.out"
    });
  });

  magnet.addEventListener("mouseleave", e => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // mouse position relative to the element
    const mouseY = e.clientY - rect.top; // mouse position relative to the element
    gsap.to(e.target, {
      duration: 0.2,
      
      x: mouseX - rect.width / 2,
      y: mouseY - rect.height / 2,
      ease: "power2.out"
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const h1HoverTrigger = document.getElementByclass('hover-trigger1');
    const videoContainer = document.getElementById('video-container1');
    const homeVideo = document.getElementById('home-video1');
  
    h1HoverTrigger.addEventListener('mouseenter', function() {
      // Show the video container and play the video
      videoContainer.style.display = 'block';
      homeVideo.play();
    });
  
    h1HoverTrigger.addEventListener('mouseleave', function() {
      // Pause the video and hide the video container
      homeVideo.pause();
      videoContainer.style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const h1HoverTrigger = document.getElementById('hover-trigger2');
    const videoContainer = document.getElementById('video-container2');
    const homeVideo = document.getElementById('home-video2');
  
    h1HoverTrigger.addEventListener('mouseenter', function() {
      // Show the video container and play the video
      videoContainer.style.display = 'block';
      homeVideo.play();
    });
  
    h1HoverTrigger.addEventListener('mouseleave', function() {
      // Pause the video and hide the video container
      homeVideo.pause();
      videoContainer.style.display = 'none';
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const h1HoverTrigger = document.getElementById('hover-trigger3');
    const videoContainer = document.getElementById('video-container3');
    const homeVideo = document.getElementById('home-video3');
  
    h1HoverTrigger.addEventListener('mouseenter', function() {
      // Show the video container and play the video
      videoContainer.style.display = 'block';
      homeVideo.play();
    });
  
    h1HoverTrigger.addEventListener('mouseleave', function() {
      // Pause the video and hide the video container
      homeVideo.pause();
      videoContainer.style.display = 'none';
    });
  });
  