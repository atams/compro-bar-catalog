/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
   useFBO,
   useGLTF,
   Scroll,
   Preload,
   ScrollControls,
   MeshTransmissionMaterial,
   Text
} from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ mode = 'lens', lensProps = {} }: any) {
   // Only support Lens mode for now as other assets are missing
   const Wrapper = Lens;
   const rawOverrides = lensProps;

   const {
      navItems = [
         { label: 'Home', link: '' },
         { label: 'About', link: '' },
         { label: 'Contact', link: '' }
      ],
      ...modeProps
   } = rawOverrides;

   return (
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
         <ScrollControls damping={0.2} pages={3} distance={0.4}>
            <Wrapper modeProps={modeProps}>
               <Scroll>
                  <Typography />
               </Scroll>
               <Scroll html />
               <Preload />
            </Wrapper>
         </ScrollControls>
      </Canvas>
   );
}

const ModeWrapper = memo(function ModeWrapper({
   children,
   glb,
   geometryKey,
   lockToBottom = false,
   followPointer = true,
   modeProps = {},
   ...props
}: any) {
   const ref = useRef<any>(null);
   const { nodes } = useGLTF(glb) as any;
   const buffer = useFBO();
   const { viewport: vp } = useThree();
   const [scene] = useState(() => new THREE.Scene());
   const geoWidthRef = useRef(1);

   useEffect(() => {
      const geo = nodes[geometryKey]?.geometry;
      if (geo) {
         geo.computeBoundingBox();
         geoWidthRef.current = geo.boundingBox.max.x - geo.boundingBox.min.x || 1;
      }
   }, [nodes, geometryKey]);

   useFrame((state, delta) => {
      const { gl, viewport, pointer, camera } = state;
      const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

      const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
      const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
      if (ref.current) {
         easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

         if (modeProps.scale == null) {
            const maxWorld = v.width * 0.9;
            const desired = maxWorld / geoWidthRef.current;
            ref.current.scale.setScalar(Math.min(0.15, desired));
         }
      }

      gl.setRenderTarget(buffer);
      gl.render(scene, camera);
      gl.setRenderTarget(null);

      // Background Color
      gl.setClearColor(0x0f172a, 1); // Dark background
   });

   const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

   return (
      <>
         {createPortal(children, scene)}
         <mesh scale={[vp.width, vp.height, 1]}>
            <planeGeometry />
            <meshBasicMaterial map={buffer.texture} transparent />
         </mesh>
         <mesh ref={ref} scale={scale ?? 0.15} rotation-x={Math.PI / 2} geometry={nodes[geometryKey]?.geometry} {...props}>
            <MeshTransmissionMaterial
               buffer={buffer.texture}
               ior={ior ?? 1.15}
               thickness={thickness ?? 5}
               anisotropy={anisotropy ?? 0.01}
               chromaticAberration={chromaticAberration ?? 0.1}
               {...extraMat}
            />
         </mesh>
      </>
   );
});

function Lens({ modeProps, ...p }: any) {
   return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Typography() {
   const DEVICE = {
      mobile: { fontSize: 0.2 },
      tablet: { fontSize: 0.4 },
      desktop: { fontSize: 0.6 }
   };
   const getDevice = () => {
      if (typeof window === 'undefined') return 'desktop';
      const w = window.innerWidth;
      return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
   };

   const [device, setDevice] = useState(getDevice());

   useEffect(() => {
      const onResize = () => setDevice(getDevice());
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const { fontSize } = DEVICE[device as keyof typeof DEVICE];

   return (
      <Text
         position={[0, 0, 12]}
         fontSize={fontSize}
         letterSpacing={-0.05}
         outlineWidth={0}
         outlineBlur="20%"
         outlineColor="#000"
         outlineOpacity={0.5}
         color="white"
         anchorX="center"
         anchorY="middle"
      >
         Haven Foundation
      </Text>
   );
}
