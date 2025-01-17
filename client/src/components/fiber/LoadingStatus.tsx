import { Html, useProgress } from '@react-three/drei';

function LoadingStatus() {

  /* Hook */

  const { progress } = useProgress();

  /* Render component */

  return (<>
    <Html center>{progress} % loaded</Html>
  </>)
}

export default LoadingStatus;
