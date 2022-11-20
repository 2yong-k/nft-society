import { light as lightGreen, dark as darkGreen } from './palette--green';
import { light as lightBlue, dark as darkBlue } from './palette--blue';
import { light as lightIndigo, dark as darkIndigo } from './palette--indigo';
import { light as lightPink, dark as darkPink } from './palette--pink';
import { light as lightOrange, dark as darkOrange } from './palette--orange';

const palette = (themeMode = 'dark', paletteType = 'green') => {
  if (paletteType === 'blue') {
    return themeMode === 'light' ? lightBlue : darkBlue;
  } else if (paletteType === 'indigo') {
    return themeMode === 'light' ? lightIndigo : darkIndigo;
  } else if (paletteType === 'pink') {
    return themeMode === 'light' ? lightPink : darkPink;
  } else if (paletteType === 'orange') {
    return themeMode === 'light' ? lightOrange : darkOrange;
  }

  return themeMode === 'light' ? lightGreen : darkGreen;
};

export default palette;
