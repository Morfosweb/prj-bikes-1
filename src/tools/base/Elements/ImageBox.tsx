
// ---------- import Packs
import React from 'react';
import { Image } from 'react-native';

// ---------- import Local Tools
import { getStlValues, pathSel } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    elementsProperties: any;
    styles: any;
    URIvariablePath: string[];
    args: any;
  };
};

function checkUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
const defaultUri =
  'https://www.budgetbatteries.com.au/wp-content/uploads/2021/12/Budget-batteries-placeholder.jpg';

// Element Image
export const ImageBox = (props: Tprops) => {
  // ------- set Props
  const { elementsProperties, styles, URIvariablePath, args } = props.pass;
  console.log({ URIvariablePath });

  // ---------- set Url Value as a single string
  let pathOrUri = URIvariablePath.join();
  const isUrl = checkUrl(pathOrUri);

  // ---------- set Watch Data
  const watchData = useData(ct => {
    let condUri: string;

    if (!isUrl) condUri = pathSel(ct, pathOrUri); // Is a Path (select data path)
    if (isUrl) condUri = pathOrUri; // Is a URL (maintains)

    return condUri;
  });

  // ---------- set Styles
  const stl = getStlValues(styles);

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (const object of elementsProperties) {
    for (const keyProp in object) {
      const valueProp = object[keyProp];
      userElProps[keyProp] = valueProp;
    }
  }

  console.log({ watchData });
  const condURI = !watchData || watchData === '';

  console.log({ condURI });
  const condFinalURI = condURI ? defaultUri : watchData;

  console.log({ condFinalURI });

  const allProps = {
    source: { uri: condFinalURI },
    style: [stl],
    resizeMode: 'cover',
    ...userElProps,
  };

  return (
    <>
      <Image {...allProps} />
    </>
  );
};

