import React from 'react'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap, { Power2 } from 'gsap';

export default function HeroScene() {
    const sceneRef = useRef(null);

    useEffect(() => {
        const currentRef = sceneRef.current;
        const timeLine = gsap.timeline({
            defaults: { duration: 1, ease: Power2.easeOut },
        });

        const sceneParams = {
            envMapIntensity: 1.0,
        };

        //Scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 100);
        scene.add(camera);
        camera.position.set(6, 0, 0);
        camera.lookAt(new THREE.Vector3());

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
        });
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        //OrbitControls
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.enableZoom = false;

        //Resize canvas
        const resize = () => {
            renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
            camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
            camera.updateProjectionMatrix();
        };
        resize();

        //load model
        const loadingManager = new THREE.LoadingManager(
            () => {
                console.log("Loaded");
            },
            (itemUrl, itemsToLoad, itemsLoaded) => {
                /* write items loader percent */
                console.log(
                    `${itemsToLoad / itemsLoaded * 100}% loaded: ${itemUrl}`
                );
            },
            (error) => {
                console.error(error);
            }
        );
        const gltfLoader = new GLTFLoader(loadingManager);
        const textureLoader = new THREE.TextureLoader();
        const textureBaseUrl = process.env.PUBLIC_URL + '/textures/';
        const planetTexture = textureLoader.load(textureBaseUrl + 'Planet_baseColor.png');
        const cloudTexture = textureLoader.load(textureBaseUrl + 'Clouds_baseColor.png');

        gltfLoader.load('./scene.gltf', (gltf) => {
            gltf.scene.traverse((node) => {
                if (node.isMesh) {
                    const material = node.material;
                    console.log(material.name);
                
                    // Verificar si el material tiene una textura y asignarla a la textura del planeta
                    if (material.name === 'Planet' && material.map === null) {
                      material.map = planetTexture;
                    }
                
                    // Verificar si el material tiene una textura y asignarla a la textura de las nubes
                    if (material.name === 'Clouds' && material.map === null) {
                      material.map = cloudTexture;

                      // Añadir animación de rotación a las nubes
                        gsap.to(material.map.offset, {
                            duration: 10,
                            x: 1,
                            repeat: -1,
                            ease: Power2.easeOut,
                        });
                    }
                  }
            });

            // rotate the model 45 degrees on the y axis
            gltf.scene.rotation.x = Math.PI / .5;
            gltf.scene.rotation.y = Math.PI / .9;

            scene.add(gltf.scene);
            castAndReceiveShadow();
            console.log('Loaded');
        }, () => {
            console.log('Loading...');
        }, (error) => {
            console.error(error);
        });

        // Cast and receive shadows
        const castAndReceiveShadow = () => {
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.material.envMapIntensity = sceneParams.envMapIntensity;
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        };

        //Light
        // const directionalLight = new THREE.DirectionalLight(0xffffff, 0);
        // directionalLight.position.set(2, 2, 10);
        // directionalLight.castShadow = true; // le da sombra a los objetos
        // directionalLight.shadow.mapSize.set(1024, 1024);
        // scene.add(directionalLight);

        // const directionalLightCameraHelper = new THREE.DirectionalLightHelper(directionalLight, 2);
        // scene.add(directionalLightCameraHelper);

        // const ambientLight = new THREE.AmbientLight(0xffffff, 0);
        // scene.add(ambientLight);


        //Animate the scene
        const animate = () => {
            orbitControls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);

            scene.traverse(function (child) {
                if (child.isMesh ) {
                    child.rotation.y += 0.004; // Añadir rotación en el eje Y
                }
            });

        };
        animate();

        // Append
        currentRef.appendChild(renderer.domElement);
        currentRef.addEventListener("resize", resize);

        //Clean up

        return () => {
            currentRef.removeEventListener("resize", resize);
            currentRef.removeChild(renderer.domElement);
            if (scene.dispose) scene.dispose();
            try {
                gui.destroy();
            } catch (e) {
                console.log(e);
            }
        };

    }, [])

    return (
        <>
            <div className="scene" ref={sceneRef} />

            <style jsx>{`
                .scene {
                    width: 60%;
                    height: 115%;
                    z-index: 2;
                    position: relative;
                    top: 0;
                    left: -30px;
                }
            `}</style>
        </>
    )
}
