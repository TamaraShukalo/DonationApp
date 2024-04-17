import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowLeft = (props: SvgProps) => (
  <Svg
    fill="#022150"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="left"
    data-name="Flat Color"
    {...props}>
    <Path
      id="primary"
      d="M21,11H5.41l5.3-5.29A1,1,0,1,0,9.29,4.29l-7,7a1,1,0,0,0,0,1.42l7,7a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"
    />
  </Svg>
);
