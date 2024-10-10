
// ---------- import Local Tools
import { tools } from '../..';

type Tprops_arrayPush = {
  args: any;
  pass: { oldArr: string; newValue: string[]; passToFuncs: any };
};
export const arrayPush = async (props: Tprops_arrayPush) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { oldArr, newValue, passToFuncs } = pass;

  // ---------- set Old Array Arguments Values (If Exists)
  if (typeof oldArr === 'string') {
    const checkArgs = oldArr.startsWith('#');
    if (checkArgs) oldArr = tools.argSel(args, oldArr);
  }

  // ---------- set New Value Arguments Values (If Exists)
  if (typeof newValue === 'string') {
    const checkArgs = newValue.startsWith('#');
    if (checkArgs) newValue = tools.argSel(args, newValue);
  }

  // ---------- set Old Array Variables Values (If Exists)
  const [condOld, oldVal] = tools.getVarValue(oldArr, 'noComponent');
  if (condOld) oldArr = oldVal;

  // ---------- set Old Array Variables Values (If Exists)
  const [condNewVal, newValVar] = tools.getVarValue(newValue, 'noComponent');
  if (condNewVal) newValue = newValVar;

  const oldLength = oldArr?.length ?? 0;
  console.log({ oldLength });
  const newIdx = oldLength;
  const defaultObj = { id: newIdx, name: 'name' + '_' + newIdx };
  const condDefault = newValue === 'noName';
  const condNewValue = condDefault ? defaultObj : newValue;

  const newArr = [];
  newArr.push(...oldArr);
  newArr.push(condNewValue);

  // ---------- set New Data
  for (const currFunc of passToFuncs) await currFunc(newArr, args);
};

