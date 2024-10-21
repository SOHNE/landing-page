 const pattern = '| |▁|▂|▃|▄|▅|▆|▇|▆|▅|▄|▃|▂|▁'

export function main(coord, context, cursor, buffer)
{
	const i = coord.index % pattern.length
	return { char: pattern[i], color: "#393939" }
}
