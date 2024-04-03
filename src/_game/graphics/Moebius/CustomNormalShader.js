import * as THREE from "three";
// import vertexShader from "!!raw-loader!./CustomNormalVertexShader.glsl";
import { fragmentShader } from "./GroundShader";

const vertexShader = `
varying vec3 vNormal;
varying vec3 eyeVector;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * worldPos;

  gl_Position = projectionMatrix * mvPosition;

  vec3 transformedNormal = normalMatrix * normal;
  vNormal = normalize(transformedNormal);
  eyeVector = normalize(worldPos.xyz - cameraPosition);
}
`;

const normalShader = {
  uniforms: {
    lightPosition: { value: new THREE.Vector3(10, 10, 10) },
  },
  vertexShader,
  fragmentShader,
};

const CustomNormalShader = new THREE.ShaderMaterial(normalShader);

export default CustomNormalShader;
