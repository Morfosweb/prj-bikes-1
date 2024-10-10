
// ---------- import Packs
import * as firestore from 'firebase/firestore';

type Tprops = {
  args: any;
  pass: { fbInit: any; arrRefStrings: string[]; arrFuncs: any[] };
};

export const getDoc = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { fbInit, arrRefStrings, arrFuncs } = pass;

  // ---------- set Local Imports
  const { getFirestore, getDocs, collection, onSnapshot, doc } = firestore;

  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  console.log({ fbInit });
  console.log({ arrRefStrings });
  const fireInit = getFirestore(fbInit[0]);
  const refColl = doc(fireInit, ...arrRefStrings);

  const unsub = onSnapshot(refColl, success => {
    let Doc = {};
    console.log({ success });
    if (success) Doc = success.data();

    // ---------- set Get Value Functions
    console.log({ Doc });

    for (const currFunc of arrFuncs) currFunc(args, Doc);
  });
};

