/**
@author ertdfgcvb
@title  Circle
@desc   Draw a smooth circle with exp()
*/

import { sdCircle } from '../../modules/play.core/src/modules/sdf.js'
import { sort } from '../../modules/play.core/src/modules/sort.js'

const density = sort('/\\MXYZabc!?=-. ', 'Simple Console', false)

export const settings = { fps : 30, color: '#39393999' }

export function main(coord, context, cursor, buffer) {
	const t  = context.time * 0.002
    const m = Math.min(context.cols, context.rows)
    const a = context.metrics.aspect

	const st = {
		x : 2.0 * (coord.x - context.cols / 2) / m * a,
		y : 2.0 * (coord.y - context.rows / 2) / m
	}

	const radius = (Math.cos(t)) * 0.4 + 0.5
	const d = sdCircle(st, radius)
	const c = 1.0 - Math.exp(-5 * Math.abs(d))
	const index = Math.floor(c * density.length)

  return density[index];
}

