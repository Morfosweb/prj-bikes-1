
// ---------- import Packs
import * as firestore from 'firebase/firestore';

type Tprops = {
  args: any;
  pass: { fbInit: any; arrRefStrings: string[]; arrFuncs: any[] };
};

export const getDocs = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { fbInit, arrRefStrings, arrFuncs } = pass;

  // ---------- set Caps Inputs

  // ---------- set Local Imports
  const { getFirestore, getDocs, collection, onSnapshot } = firestore;

  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  console.log({ fbInit });
  console.log({ arrRefStrings });
  const fireInit = getFirestore(fbInit[0]);
  const refColl = collection(fireInit, ...arrRefStrings);

  const unsub = onSnapshot(refColl, success => {
    const arrDocs = [];
    success.forEach((doc: any) => {
      arrDocs.push(doc.data());
    });

    // ---------- set Get Value Functions
    console.log({ arrDocs });
    for (const currFunc of arrFuncs) currFunc(arrDocs, args);
  });
};

