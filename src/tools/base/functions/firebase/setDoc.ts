
// ---------- import Packs
import * as firestore from 'firebase/firestore';

// ---------- import Local Tools
import { getCtData } from '../../project';

export const css1 =
  'color: green; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: yellow; background-color: green; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  args: any;
  pass: {
    fbInit: any;
    arrRefStrings: string[];
    arrPathData: string[];
    arrFuncs: any[];
  };
};

export const setDoc = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { fbInit, arrRefStrings, arrPathData, arrFuncs } = pass;

  // ---------- set Local Imports
  const { getFirestore, doc, setDoc, collection, Timestamp } = firestore;

  // ---------- set Caps Inputs

  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  const fireInit = getFirestore(fbInit[0]);
  const refColl = collection(fireInit, ...arrRefStrings);
  const refDoc = doc(refColl);

  // ------ check Data
  if (!Array.isArray(arrRefStrings))
    return console.log('newArrRef needs to be a string array', newArrRef);

  // ------ read Data
  let dataToSet = {};
  dataToSet = getCtData(arrPathData.join());
  // console.log({ dataToSet });

  // ------ add new id
  dataToSet.docId = refDoc.id;
  dataToSet.createdAt = Timestamp.now();

  await setDoc(refDoc, dataToSet).catch(err =>
    console.log('Erro do setDoc', { err }),
  );

  // ---------- set Get Value Functions
  for (const currFunc of arrFuncs) await currFunc(dataToSet, args);

  console.log('%csetDoc ok', css1);
  console.log('%cReferencia do Documento', css2, { arrRefStrings, dataToSet });

  return dataToSet;
};

