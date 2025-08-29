/**
 * Given an array of { lux, power } and a target lux level,
 * returns exact or linearly‐interpolated power (µW/cm²).
 */
export function getPowerFromLux(points, lux) {
    if (!points || points.length === 0) return 0;
  
    const pts = [...points].sort((a, b) => a.lux - b.lux);
  
    if (lux <= pts[0].lux) return pts[0].power;
    if (lux >= pts[pts.length - 1].lux) return pts[pts.length - 1].power;
  
    for (let i = 0; i < pts.length - 1; i++) {
      const p1 = pts[i], p2 = pts[i + 1];
      if (lux >= p1.lux && lux <= p2.lux) {
        if (lux === p1.lux) return p1.power;
        const ratio = (lux - p1.lux) / (p2.lux - p1.lux);
        return p1.power + ratio * (p2.power - p1.power);
      }
    }
  
    return 0;
  }