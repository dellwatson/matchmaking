import { Outline } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";

import React from "react";

// export default function OutlinePass() {
//     return (
//         <Outline
//           selection={[meshRef1, meshRef2]} // selection of objects that will be outlined
//           selectionLayer={10} // selection layer
//           blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
//           patternTexture={null} // a pattern texture
//           edgeStrength={2.5} // the edge strength
//           pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
//           visibleEdgeColor={0xffffff} // the color of visible edges
//           hiddenEdgeColor={0x22090a} // the color of hidden edges
//           width={Resizer.AUTO_SIZE} // render width
//           height={Resizer.AUTO_SIZE} // render height
//           kernelSize={KernelSize.LARGE} // blur kernel size
//           blur={false} // whether the outline should be blurred
//           xRay={true} // indicates whether X-Ray outlines are enabled
//         />
//       )
// }
