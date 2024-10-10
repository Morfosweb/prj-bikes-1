
// ---------- import Packs
import React from 'react';
import { View } from 'react-native';

// ---------- import Local Tools
import { argSel, getStlValues, mapElements, pathSel } from '../project';
import { useData } from '../../..';
import { backgroundColor, width } from '../stls';

export const css =
  'color: lightblue; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  pass: {
    elementsProperties: any;
    styles: any;
    variablePath: string[];
    expectedVal: string[];
    childrenItems: any;
    args: any;
  };
};

// DynView - ccc_dynView Com Esquema Join Leitura de Var. (newBase)
export const DynView = (props: Tprops) => {
  // ---------- set Props
  const { elementsProperties, variablePath, styles } = props.pass;
  const { expectedVal, childrenItems, args } = props.pass;

  // ---------- set VarPath and expectedVal as a single string
  let varPath = variablePath.join();
  const newVal = expectedVal.join();

  const condHash = varPath.startsWith('#');
  let compareVal = useData(ct => pathSel(ct, varPath));
  if (condHash) compareVal = argSel(args, varPath);

  // ---------- set Conditional Element Render
  let condRender = true;
  if (variablePath.length > 0) condRender = compareVal === newVal;

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};

  for (const object of elementsProperties) {
    for (const keyProp in object) {
      const valueProp = object[keyProp];
      userElProps[keyProp] = valueProp;
    }
  }

  const allProps = {
    // style: [stl],
    style: [stl],
    children: mapElements(childrenItems, args),
    ...userElProps,
  };

  // ---------- set Render
  return <>{condRender && <View {...allProps} />}</>;
};

