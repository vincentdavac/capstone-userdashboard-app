import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type GLTFResult = {
  scene: THREE.Group;
};

function Model() {
  const { scene } = useGLTF('/no_weights.glb') as GLTFResult;
  const ref = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());

      ref.current.position.x += ref.current.position.x - center.x;
      ref.current.position.y += ref.current.position.y - center.y;
      ref.current.position.z += ref.current.position.z - center.z;

      const distance = size * 0.7;
      camera.position.set(distance, distance, distance);
      camera.lookAt(center);
    }
  }, [camera]);

  return <primitive ref={ref} object={scene} />;
}

export default function ModelViewer() {
  return (
    <Canvas
      camera={{ fov: 45, near: 0.1, far: 1000 }}
      style={{
        background: 'transparent',
        width: '110%',
        height: '107%',
        borderRadius: '8px',
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[0, -5, -5]} intensity={0.6} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls
        enableZoom
        enablePan={false}
        minDistance={2}
        maxDistance={50}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}
