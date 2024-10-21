export const settings = {
	color           : '#525252',
	fontSize        : '1em',
	fontWeight      : '100'
}

const TAU = 6.283185307179586;
const NAME = '       Leandro Peres       ';

export function main(coord, context, cursor, buffer)
{
	const a = context.frame * 0.05
	const f = Math.floor((1 - Math.cos(a)) * 10) + 1
	const g = Math.floor(a / TAU) % 10 + 1
	const i = coord.index % (coord.y * g + 1) % ((f % context.cols) % NAME.length)
	return NAME[i]
}
