
// ---------- import Packs
import React from 'react';
import { TextInput } from 'react-native';

// ---------- import Local Tools
import { getStlValues, pathSel } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    propsArray: any;
    stylesArray: any;
    funcsArray: any;
    editPath: string[];
    args: any;
  };
};

// IptTxtEdit - Entrada de Texto com prop value
export const IptTxtEdit = (props: Tprops) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, editPath, args } = props.pass;

  const getTxt = async (val: string) => {
    for (const currFunc of funcsArray) await currFunc(val, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);
  const editData = useData(ct => pathSel(ct, editPath.join()));

  // ------- set User Props
  const userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      console.log('IS A FUNCTION !!!!!!!!!!');
      console.log({ object });
      console.log({ newObj });
      newObj = object();
    }

    if (!isFnc) {
      console.log('NOT FUNCTION');
      console.log({ object });
      console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  console.log({ userElProps });
  const allProps = {
    style: [stlsUser],
    onChangeText: getTxt,
    value: editData,
    placeholderTextColor: '#ccc',
    placeholder: 'Escreva...',

    ...userElProps,
  };

  return <TextInput {...allProps} />;
};

