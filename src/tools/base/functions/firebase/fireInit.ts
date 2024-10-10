
// ---------- set Local Imports
import { initializeApp } from 'firebase/app';

type Tprops = { args: any; pass: { fbConfig: any; arrFuncs: any[] } };

export const fireInit = async (props: Tprops) => {
  // export const fireInit = async () => {
  console.log('fireInit');
  // ---------- set Props
  const { args, pass } = props;
  const { fbConfig, arrFuncs } = pass;
  // ---------- set Caps Inputs
  if (typeof fbConfig === 'object') {
    // ---------- set FB Init on a Variable
    const fbInit = initializeApp(fbConfig, 'secondary');
    console.log({ fbInit });
    for (const currFunc of arrFuncs) {
      await currFunc(fbInit, args);
    }
  } else {
    console.log('fbConfig precisa ser um objeto', { fbConfig });
  }
};

