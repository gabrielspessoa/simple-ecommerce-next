import * as React from 'react';
import { SVGProps } from 'react';
const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    style={{
      margin: 'auto',
      background: 'none',
    }}
    width='200px'
    height='200px'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    display='block'
    shapeRendering='auto'
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      fill='none'
      stroke={props.color}
      strokeWidth={10}
      r={35}
      strokeDasharray='164.93361431346415 56.97787143782138'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        repeatCount='indefinite'
        dur='1s'
        values='0 50 50;360 50 50'
        keyTimes='0;1'
      />
    </circle>
  </svg>
);
export default SvgSpinner;
