export interface CircularProgressProps {
    progress: number
}
 
const CircularProgress: React.SFC<CircularProgressProps> = ({progress}) => {
    const arcThickness = '1em'
    const circleSize = '14em'
    const circleColor = '#ccc'
    const arcStartPosition = '90deg'
    const circleOutterSize = '16rem'
    const [arcColor, arcColorBackground] = progress > 50 ? ['#ddd', '#44f'] : ['navy', '#ddd']
    const flip = progress > 50 ?  0 : 180
    progress = progress > 50 ? 100 - progress : progress
    const arcSkewX = (progress * 3.6 - 90 ) * -1
    const arcSkewXfix = arcSkewX * -1
    

    return ( <>
        <div className='circle'>
            <div className='arc'></div>
            <div className='text'></div>
        </div>
      <style jsx>{`
      .circle {
	position: relative;
	margin: 10em auto;
	width: ${circleOutterSize};
    height: ${circleOutterSize};
	border-radius: 50%;
	background: ${arcColorBackground};
      }
    .circle:before {
	content: '';
	display: block;
	position: relative;
	width: ${circleSize};
    height: ${circleSize};
	border-radius: 50%;
	background: ${circleColor};
	top: ${arcThickness};
	left: ${arcThickness};
}
.arc {
	overflow: hidden;
    width: 50%;
    height: 50%;
	//background: #333;
	position: absolute;
    top: 0;
	// top: -10000em;
    // right: 50%;
    // bottom: 50%;
    // left: -10000em;
	// padding: 10000em 0 0 10000em;
	transform-origin: 100% 100%;
transform: rotateZ(${arcStartPosition}) rotateX(${flip}deg) skewX(${arcSkewX}deg);
}
.arc:before {
	//box-sizing: border-box;
	display: block;
	border: solid ${arcThickness} ${arcColor};
	width: 200%;
    height: 200%;

	box-sizing: border-box;
	border-radius: 50%;
	transform: skewX(${arcSkewXfix}deg);
	content: '';
}

      `}</style>
    </> );
}
 
export default CircularProgress;