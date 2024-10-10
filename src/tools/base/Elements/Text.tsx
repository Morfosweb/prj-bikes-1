
// ---------- import Packs
import React from 'react';
import { Text as RNText } from 'react-native';

type Tprops = {
  pass: { arrProps: any; arrStyles: any; children: any; args?: any };
};

export const Text = (props: Tprops) => {
  // ---------- set Capsules Inputs
  const { arrProps, arrStyles, args } = props.pass;
  let { children } = props.pass;

  if (typeof children === 'object') {
    const newMap = children.map((item, idx) => {
      if (typeof item === 'function') {
        console.log({ item });
        const test = item(args);

        return test;
      }

      return item;
    });

    children = newMap.reduce((prev, curr) => prev + curr, '');
  }

  // ------- set User Element Properties (If Exists)
  const userElProps = {};

  for (const object of arrProps) {
    for (const keyProp in object) {
      const valueProp = object[keyProp];
      userElProps[keyProp] = valueProp;
    }
  }

  const allProps = {
    style: arrStyles,
    children,

    ...userElProps,
  };

  // ---------- set Render
  return <RNText {...allProps} />;
};

