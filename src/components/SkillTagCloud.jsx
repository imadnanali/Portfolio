import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SkillTagCloud = () => {
  const containerRef = useRef(null); // Use ref to target the container div

  useEffect(() => {
    // Ensure the ref is set
    if (!containerRef.current) return;

    const scn = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const rndr = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const grp = new THREE.Group();
    const ldr = new THREE.TextureLoader();

    // const icons = [
    //   'arduino', 'azure', 'bootstrap', 'chrome', 'css', 'express', 'figma',
    //   'git', 'github', 'html', 'javascript', 'jquery', 'mongo', 'nextjs',
    //   'nodejs', 'photoshop', 'python', 'react', 'rpi', 'sass', 'sql',
    //   'typescript', 'vscode',
    // ].map((i) => `/assets/${i}.svg`);
    const icons = [
      'bootstrap', 'css', 'express', 'figma',
      'git', 'github', 'html', 'javascript', 'mongo', 'nextjs',
      'nodejs', 'react', 'vscode', 'c', 'java', 'postman', 'tailwind', 'canva',
    ].map((i) => `/assets/${i}.svg`);

    const sps = [];
    const radius = 27; // Radius of the sphere
    const size = 6; // Size of the icons

    // Set up renderer
    rndr.setSize(375, 375); 
    containerRef.current.appendChild(rndr.domElement); // Append renderer to the container

    // Create sprites and position them
    icons.forEach((path, index) =>
      ldr.load(
        path,
        (texture) => {
          const phi = Math.acos(-1 + (2 * index) / icons.length);
          const theta = Math.sqrt(icons.length * Math.PI) * phi;

          const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }));
          sprite.scale.set(size, size, 1);
          sprite.position.set(
            radius * Math.cos(theta) * Math.sin(phi),
            radius * Math.sin(theta) * Math.sin(phi),
            radius * Math.cos(phi)
          );
          grp.add(sprite);
          sps.push(sprite);
        },
        undefined,
        (err) => {
          console.error(`Error loading texture: ${path}`, err);
        }
      )
    );

    scn.add(grp);
    cam.position.z = 50;

    // Update canvas rectangle for mouse events
    let canvasRect = rndr.domElement.getBoundingClientRect();

    const updateCanvasRect = () => {
      canvasRect = rndr.domElement.getBoundingClientRect();
    };

    window.addEventListener('scroll', updateCanvasRect);
    window.addEventListener('resize', updateCanvasRect);

    // Handle click events on sprites
    const ry = new THREE.Raycaster();
    window.addEventListener('click', (e) => {
      if (
        e.clientX >= canvasRect.left &&
        e.clientX <= canvasRect.right &&
        e.clientY >= canvasRect.top &&
        e.clientY <= canvasRect.bottom
      ) {
        ry.setFromCamera(
          {
            x: (2 * (e.clientX - canvasRect.left)) / 375 - 1,
            y: -(2 * (e.clientY - canvasRect.top)) / 375 + 1,
          },
          cam
        );
        const intersected = ry.intersectObjects(sps)[0];
        if (intersected) grp.attach(intersected.object);
      }
    });

    // Handle mouse movement for rotation
    let mx = 0,
      my = 0;
    window.addEventListener('mousemove', (e) => {
      if (
        e.clientX >= canvasRect.left &&
        e.clientX <= canvasRect.right &&
        e.clientY >= canvasRect.top &&
        e.clientY <= canvasRect.bottom
      ) {
        mx = 0.01 * (e.clientX - canvasRect.left) / 375 - 1;
        my = 2 * -(e.clientY - canvasRect.top) / 375 + 1;
      }
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      grp.rotation.y += 0.005 + mx * 0.02;
      grp.rotation.x += my * 0.02;
      grp.children.forEach((sprite) => sprite.lookAt(cam.position));
      rndr.render(scn, cam);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      window.removeEventListener('scroll', updateCanvasRect);
      window.removeEventListener('resize', updateCanvasRect);
    };
  }, []);

  return (
    <section id="section1" className="saturate-200 flex justify-center items-center py-10">
      
      <div
        ref={containerRef}
        style={{
          height: '375px',
          aspectRatio: '1',
          margin: '0 auto',
        }}
      ></div>
    </section>
  );
};

export default SkillTagCloud;
