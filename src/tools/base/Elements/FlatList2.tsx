
// ---------- import Packs
import React from 'react';
import { FlatList } from 'react-native';

// ---------- import Local Tools
import { mapElements, pathSel } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    elementProperties: any;
    pData: any;
    itemElements: any;
    args: any;
  };
};

// FlatList2 - ccc_flatList (newBase)
export const FlatList2 = (props: Tprops) => {
  // ------- set Caps Inputs
  const { elementProperties, pData, itemElements, args } = props.pass;

  // ---------- set Data Listener
  // console.log({ pData });
  let watchData = '';
  if (typeof pData === 'string') watchData = useData(ct => pathSel(ct, pData));
  // console.log({ watchData });
  // ---------- set List Item
  const renderItem = ({ item, index }: any) => (
    <>{mapElements(itemElements, { item, index })}</>
  );

  // ------- set User Element Properties (If Exists)
  let userElProps = {};

  for (const object of elementProperties) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      // console.log('IS A FUNCTION !!!!!!!!!!');
      // console.log({ object });
      // console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      // console.log('NOT FUNCTION');
      // console.log({ object });
      // console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  const allProps = {
    data: watchData,
    renderItem,

    ...userElProps,
  };

  // console.log({ elementProperties, allProps });

  // ------- set Render
  return <FlatList {...allProps} />;
};

