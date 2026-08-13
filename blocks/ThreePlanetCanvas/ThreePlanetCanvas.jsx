import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreePlanetCanvas = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // 1. Scene, Camera, Renderer Setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0a0a0c, 0.0015);

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 15;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // 2. Glowing Planet Sphere
        const planetGeometry = new THREE.SphereGeometry(4, 64, 64);
        const planetMaterial = new THREE.MeshPhongMaterial({
            color: 0x1e1b4b,
            emissive: 0x312e81,
            wireframe: true,
            transparent: true,
            opacity: 0.85,
        });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.position.set(6, -2, -5);
        scene.add(planet);

        // Inner Core Glow Sphere
        const coreGeometry = new THREE.SphereGeometry(3.6, 32, 32);
        const coreMaterial = new THREE.MeshBasicMaterial({
            color: 0x6366f1,
            transparent: true,
            opacity: 0.35,
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        planet.add(core);

        // 3. Planet Saturn Ring
        const ringGeometry = new THREE.RingGeometry(5.2, 7.5, 64);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6,
            wireframe: true,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2.5;
        planet.add(ring);

        // 4. Starfield Particles
        const starsCount = 1200;
        const starGeometry = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starsCount * 3);
        const starColors = new Float32Array(starsCount * 3);

        const colorPalette = [
            new THREE.Color(0x38bdf8),
            new THREE.Color(0x818cf8),
            new THREE.Color(0xa2facf),
            new THREE.Color(0xffffff)
        ];

        for (let i = 0; i < starsCount; i++) {
            starPositions[i * 3] = (Math.random() - 0.5) * 100;
            starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;

            const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            starColors[i * 3] = c.r;
            starColors[i * 3 + 1] = c.g;
            starColors[i * 3 + 2] = c.b;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

        const starMaterial = new THREE.PointsMaterial({
            size: 0.12,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
        });
        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);

        // 5. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x38bdf8, 2, 50);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // 6. Interactive Mouse & Scroll Parallax
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleMouseMove = (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            planet.rotation.y = scrollY * 0.0015;
            planet.position.y = -2 + scrollY * 0.003;
            starField.rotation.y = scrollY * 0.0005;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // 7. Animation Loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            // Smooth lerp mouse parallax
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            planet.rotation.x += 0.002;
            planet.rotation.y += 0.003;
            ring.rotation.z += 0.001;
            starField.rotation.x += 0.0002;

            camera.position.x = targetX * 5;
            camera.position.y = -targetY * 5;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        const currentContainer = containerRef.current;
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            if (currentContainer && renderer.domElement) {
                currentContainer.removeChild(renderer.domElement);
            }
            scene.clear();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 70% 30%, #1e1b4b 0%, #0a0a0c 70%)'
            }}
        />
    );
};

export default ThreePlanetCanvas;
