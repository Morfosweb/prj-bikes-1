
// ---------- import Packs
import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';

// ---------- import Local Tools
import { setVar } from '../functions';
import { getStlValues, mapElements } from '../project';
import { useRoutes } from '../../..';

type Tprops = {
  pass: {
    pathScreen: string;
    styles: any;
    screenElements: any;
    startFunctions: any;
    args: any;
  };
};

// Screen3 (newBase)
export const Screen3 = (props: Tprops) => {
  const { pathScreen } = props.pass;
  const currRoute = useRoutes(ct => ct.currRoute);
  const condShow = pathScreen === currRoute;

  return <>{condShow && <Screen3Render pass={props.pass} />}</>;
};

function Screen3Render(props: Tprops) {
  const { styles, screenElements, startFunctions, args } = props.pass;

  // ---------- set Responsive Var
  const { height, width } = useWindowDimensions();
  const isMobile = width < 580;
  console.log({ width, height });

  setVar({
    args,
    pass: {
      keyPath: ['all.responsive.sizes'],
      value: { height, width, isMobile },
    },
  });

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of startFunctions) await currFunc();
    };
    callFn().catch(err => console.log({ err }));
  }, []);

  // ---------- set Variables Styles (If Exists)
  console.log('AQUI 2', { styles });
  const stl = getStlValues(styles);
  console.log('AQUI 3', { stl });

  // ---------- set Render
  return <View style={[stl]}>{mapElements(screenElements, args)}</View>;
}

