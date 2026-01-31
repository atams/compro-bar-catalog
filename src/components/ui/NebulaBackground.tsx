'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

const NebulaShader = {
   uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      uColor1: { value: new THREE.Color('#0A0A0A') }, // Rich Black
      uColor2: { value: new THREE.Color('#1a1a1a') }, // Dark Charcoal
      uColor3: { value: new THREE.Color('#BE3455') }, // Viva Magenta
   },
   vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
   fragmentShader: `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec3 uColor1; // Base Black
    uniform vec3 uColor2; // Deep Charcoal
    uniform vec3 uColorAccent; // Viva Magenta
    uniform vec3 uColorGold;   // Champagne
    uniform vec3 uColorPurple; // Deep Purple
      
    varying vec2 vUv;

    // Noise function
    float random (in vec2 _st) {
        return fract(sin(dot(_st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    // 2D Noise
    float noise (in vec2 _st) {
        vec2 i = floor(_st);
        vec2 f = fract(_st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    #define NUM_OCTAVES 3

    float fbm ( in vec2 _st) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
        for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(_st);
            _st = rot * _st * 2.0 + shift;
            a *= 0.5;
        }
        return v;
    }

      void main() {
        vec2 st = vUv * 3.0;
        st.x *= uResolution.x / uResolution.y;

        vec2 q = vec2(0.);
        q.x = fbm( st + 0.00 * uTime);
        q.y = fbm( st + vec2(1.0));

        vec2 r = vec2(0.);
        r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
        r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*uTime);

        float f = fbm(st+r);

        // Dark Mixology Logic
        // Mix deep colors for a smoky bar atmosphere
        
        vec3 smoke1 = mix(uColor2, uColorPurple, smoothstep(0.0, 1.0, q.x)); 
        vec3 smoke2 = mix(uColorAccent, uColorGold, smoothstep(0.0, 1.0, q.y));
        
        // Very subtle mix of color into the smoke
        vec3 complexSmoke = mix(smoke1, smoke2, f * 0.4); 
        
        // Base Dark Background
        vec3 ambience = mix(uColor1, complexSmoke, 0.3); // Mostly dark, 30% smoke
        
        // Density for alpha/mix
        float density = smoothstep(0.1, 0.9, f); 
        
        vec3 finalColor = mix(uColor1, ambience, density); 
        
        // Heavy Vignette for "Spotlight" feel
        float dist = distance(vUv, vec2(0.5));
        finalColor = mix(finalColor, uColor1, dist * 0.8); 

        gl_FragColor = vec4(finalColor, 1.0);
      }
  `,
};

function NebulaMesh() {
   const mesh = useRef<THREE.Mesh>(null);
   const material = useRef<THREE.ShaderMaterial>(null);
   const { size, viewport } = useThree();

   const uniforms = useMemo(
      () => ({
         uTime: { value: 0 },
         uResolution: { value: new THREE.Vector2(size.width, size.height) },
         // Base Dark Theme
         uColor1: { value: new THREE.Color('#050505') }, // Almost Black
         uColor2: { value: new THREE.Color('#1a1a1a') }, // Dark Charcoal
         // Accents
         uColorAccent: { value: new THREE.Color('#BE3455') }, // Viva Magenta
         uColorGold: { value: new THREE.Color('#F3E5AB') },   // Champagne
         uColorPurple: { value: new THREE.Color('#2e0b1c') }, // Deep Burgundy/Purple
      }),
      []
   );

   useEffect(() => {
      if (material.current) {
         material.current.uniforms.uResolution.value.set(size.width, size.height);
      }
   }, [size]);

   useFrame((state) => {
      if (material.current) {
         material.current.uniforms.uTime.value = state.clock.getElapsedTime() * 0.05; // Very slow smoke
      }
   });

   return (
      <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
         <planeGeometry args={[1, 1]} />
         <shaderMaterial
            ref={material}
            vertexShader={NebulaShader.vertexShader}
            fragmentShader={NebulaShader.fragmentShader}
            uniforms={uniforms}
            transparent
         />
      </mesh>
   );
}

export default function NebulaBackground() {
   return (
      <div className="fixed inset-0 -z-10 bg-[#0A0A0A]">
         <Canvas
            camera={{ position: [0, 0, 1] }}
            dpr={1}
            gl={{ antialias: false, alpha: false }}
         >
            <NebulaMesh />
         </Canvas>
      </div>
   );
}
