
// ---------- import Local Tools
import { setData } from '../project';

export const css1 =
  'color: yellow; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: green; background-color: black; font-size: 10px; padding: 2px 6px; border-radius: 3px';

export const css3 =
  'color: yellow; background-color: red; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css4 =
  'color: yellow; background-color: darkred; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops_setVar = { args: any; pass: { keyPath: string[]; value: any } };
export const setVar = (props: Tprops_setVar) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { keyPath, value } = pass;
  console.log('%csetVar', { keyPath, value });

  // ---------- join String
  const url = keyPath.reduce((prev, curr) => prev + curr, '');

  // --------- update Central Data
  if (value === undefined) {
    // --------- set Consoles System
    console.log('%csetVar', css3);
    console.log('%csetVar path', css4, url);
    console.table('%csetVar value', css4, 'o valor de value é ' + value);
  }

  if (value !== undefined) {
    // --------- set Consoles System
    console.log('%csetVar', css1);
    console.log('path:', url);
    console.table('value:', value);
  }

  setData({ path: url, value: value });
};

