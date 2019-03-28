export function redToGreen(reset_ms) {
  let start_color = [255,0,0];
  const $six_minutes = 3600000;
  const ms_per_unit = $six_minutes / 255;
  if (reset_ms < $six_minutes) {
    let $units_change =  reset_ms / ms_per_unit;
    start_color = [255, $units_change, $units_change];
  }
  return start_color;
}

export function addHexColor(c1, c2) {
  var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
  return hexStr;
}
