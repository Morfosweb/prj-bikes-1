
// ---------- import Packs
import React from 'react';
import { Pressable, TextInput, ViewStyle } from 'react-native';

// ---------- import Local Tools
import { getStlValues, pathSel } from '../project';
// import { SvgView1 } from './SvgView1';
import { useData } from '../../..';

const SvgView1 = () => <></>;

type Tprops = {
  pass: {
    propsArray: any;
    stylesArray: any;
    funcsArray: any;
    args: any;
  };
};

// IptTxt2 - Entrada de Texto (fromDB_var)
export const IptTxt2 = (props: Tprops) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, args } = props.pass;

  const getTxt = async (val: string) => {
    for (const currFunc of funcsArray) await currFunc(val, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);

  // ------- set User Props
  let userElProps: any = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      console.log('IS A FUNCTION !!!!!!!!!!');
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      console.log('NOT FUNCTION');
      console.log({ object });

      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  const allProps = {
    style: [stlsUser],
    onChangeText: getTxt,
    placeholderTextColor: '#ccc',
    placeholder: 'Escreva...',

    ...userElProps,
  };

  return <TextInput {...allProps} />;
};

// ---------- IptTxt Masks

type Tprops2 = {
  pass: {
    propsArray: any;
    stylesArray: any;
    funcsArray: any;
    editPath: string[];
    ipt5?: string[];
    args: any;
  };
};

export const IptTxtMaskPhone = (props: Tprops2) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, editPath, args } = props.pass;
  //   console.log({ propsArray });

  const getTxt = async (val: string) => {
    // ---------- set Limit Chars
    let limitChars = val;
    if (limitChars?.length > 15) limitChars = limitChars?.substring(0, 15);

    // ---------- set OnlyNumbers
    const onlyNum = limitChars?.replace(/D/g, '') ?? {};
    const arrChars = Object.values(onlyNum);
    const numChars = arrChars.length;

    // ---------- set Format Numbers
    const idx = num => arrChars[num] ?? '';
    const firstFour = idx(2) + idx(3) + idx(4) + idx(5) + idx(6);
    const secFour = idx(7) + idx(8) + idx(9) + idx(10);
    const condHifen = numChars > 7 ? '-' : '';
    const condSpace = numChars > 2 ? ' ' : '';
    const condPar1 = numChars > 0 ? '(' : '';
    const condPar2 = numChars > 2 ? ')' : '';
    const condDDD = condPar1 + idx(0) + idx(1) + condPar2;
    const mask = condDDD + condSpace + firstFour + condHifen + secFour;
    for (const currFunc of funcsArray) await currFunc(mask, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);
  const editData = useData(ct => pathSel(ct, editPath.join()));

  // ------- set User Props
  let userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      //   console.log('IS A FUNCTION !!!!!!!!!!');
      //   console.log({ object });
      //   console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      //   console.log('NOT FUNCTION');
      //   console.log({ object });
      //   console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  //   console.log({ userElProps });
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

export const IptTxtMaskCPF = (props: Tprops2) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, editPath, args } = props.pass;
  //   console.log({ propsArray });

  const getTxt = async (val: string) => {
    let limitChars = val;
    if (limitChars?.length > 19) limitChars = limitChars?.substring(0, 19);

    // ---------- set OnlyNumbers
    const onlyNum = limitChars?.replace(/D/g, '');
    // console.log({ onlyNum });

    // ---------- set Format Numbers
    const mask = onlyNum
      ?.replace(/D+/g, '')
      .replace(/(d{3})(d)/, '!#!.!#!')
      .replace(/(d{3})(d)/, '!#!.!#!')
      .replace(/(d{3})(d)/, '!#!-!#!')
      .replace(/(-d{2})d+?$/, '!#!');

    // console.log({ mask });

    for (const currFunc of funcsArray) await currFunc(mask, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);
  const editData = useData(ct => pathSel(ct, editPath.join()));

  // ------- set User Props
  let userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      //   console.log('IS A FUNCTION !!!!!!!!!!');
      //   console.log({ object });
      //   console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      //   console.log('NOT FUNCTION');
      //   console.log({ object });
      //   console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  //   console.log({ userElProps });
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

export const IptTxtMaskCNPJ = (props: Tprops2) => {
  console.log('CNPJ Mask');
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, editPath, args } = props.pass;
  console.log({ propsArray });

  const getTxt = async (val: string) => {
    let limitChars = val;
    if (limitChars?.length > 19) limitChars = limitChars?.substring(0, 19);

    // ---------- set OnlyNumbers
    const onlyNum = limitChars?.replace(/D/g, '');

    // ---------- set Format Numbers
    const mask = onlyNum
      ?.replace(/D+/g, '')
      .replace(/(d{2})(d)/, '!#!.!#!')
      .replace(/(d{3})(d)/, '!#!.!#!')
      .replace(/(d{3})(d)/, '!#!/!#!')
      .replace(/(d{4})(d)/, '!#!-!#!')
      .replace(/(-d{2})d+?$/, '!#!');

    // console.log({ mask });

    for (const currFunc of funcsArray) await currFunc(mask, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);
  const editData = useData(ct => pathSel(ct, editPath.join()));

  // ------- set User Props
  let userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      //   console.log('IS A FUNCTION !!!!!!!!!!');
      //   console.log({ object });
      //   console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      //   console.log('NOT FUNCTION');
      //   console.log({ object });
      //   console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  //   console.log({ userElProps });
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

export const IptTxtMaskRG = (props: Tprops2) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, editPath, args } = props.pass;

  const getTxt = async (val: string) => {
    let limitChars = val;
    if (limitChars?.length > 13) limitChars = limitChars?.substring(0, 13);

    // ---------- set OnlyNumbers
    const onlyNum = limitChars?.replace(/D/g, '');

    // ---------- set Format Numbers
    // 00.000.000-01
    const mask = onlyNum
      ?.replace(/D+/g, '')
      .replace(/(d{2})(d)/, '!#!.!#!')
      .replace(/(d{3})(d)/, '!#!.!#!')
      .replace(/(d{3})(d)/, '!#!-!#!')
      .replace(/(-d{2})d+?$/, '!#!');

    for (const currFunc of funcsArray) await currFunc(mask, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);
  const editData = useData(ct => pathSel(ct, editPath.join()));

  // ------- set User Props
  let userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      //   console.log('IS A FUNCTION !!!!!!!!!!');
      //   console.log({ object });
      //   console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      //   console.log('NOT FUNCTION');
      //   console.log({ object });
      //   console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  //   console.log({ userElProps });
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

export const IptTxtMaskCCard = (props: Tprops2) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, args } = props.pass;
  // let editData = useData(ct => pathSel(ct, editPath.join()));
  const [sttCardNum, setCardNum] = React.useState('');

  const getTxt = async (val: string) => {
    let limitChars = val;
    if (limitChars?.length > 19) limitChars = limitChars?.substring(0, 19);

    // ---------- set OnlyNumbers
    const onlyNum = limitChars?.replace(/D/g, '');

    // ---------- set Format Numbers
    // 5394.3161.7485.6180
    const mask = onlyNum
      ?.replace(/D+/g, '')
      .replace(/(d{4})(d)/, '!#!.!#!')
      .replace(/(d{4})(d)/, '!#!.!#!')
      .replace(/(d{4})(d)/, '!#!.!#!')
      .replace(/(d{4})(d)/, '!#!.!#!');

    setCardNum(mask);
    for (const currFunc of funcsArray) await currFunc(mask, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);

  // ------- set User Props
  let userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      //   console.log('IS A FUNCTION !!!!!!!!!!');
      //   console.log({ object });
      //   console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      //   console.log('NOT FUNCTION');
      //   console.log({ object });
      //   console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  const allProps = {
    style: [stlsUser],
    onChangeText: getTxt,
    value: sttCardNum,
    placeholderTextColor: '#ccc',
    placeholder: 'Escreva apenas números sem pontuação',

    ...userElProps,
  };

  return <TextInput {...allProps} />;
};

export const IptTxtMaskCustomNumbers = (props: Tprops2) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, ipt5, args } = props.pass;
  const [sttNum, setNum] = React.useState('');

  const getTxt = async (val: string) => {
    let numberLimit = Number(ipt5.join());
    let limitChars = val;
    if (limitChars?.length > numberLimit)
      limitChars = limitChars?.substring(0, numberLimit);

    // ---------- set OnlyNumbers
    const mask = limitChars?.replace(/D/g, '');
    setNum(mask);
    for (const currFunc of funcsArray) await currFunc(mask, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);

  // ------- set User Props
  let userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      //   console.log('IS A FUNCTION !!!!!!!!!!');
      //   console.log({ object });
      //   console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      //   console.log('NOT FUNCTION');
      //   console.log({ object });
      //   console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  //   console.log({ userElProps });
  const allProps = {
    style: [stlsUser],
    onChangeText: getTxt,
    value: sttNum,
    placeholderTextColor: '#ccc',
    placeholder: 'Escreva...',

    ...userElProps,
  };

  return <TextInput {...allProps} />;
};

export const IptTxtPassword = (props: Tprops2) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, args } = props.pass;

  // ---------- Watchers
  const [sttText, setText] = React.useState('');
  const [sttShowPass, setShowPass] = React.useState(true);

  const btnToggle = () => setShowPass(!sttShowPass);
  const getTxt = async (val: string) => {
    setText(val);
    for (const currFunc of funcsArray) await currFunc(val, args);
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);
  const stlBtnEye: ViewStyle = {
    width: 34,
    height: 24,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 2,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  };

  // ------- set User Props
  let userElProps = {};

  for (const object of propsArray) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  const allProps = {
    style: [stlsUser],
    secureTextEntry: sttShowPass,
    onChangeText: getTxt,
    placeholderTextColor: '#C0C0C0',
    value: sttText,

    ...userElProps,
  };

  return (
    <>
      <TextInput {...allProps} />
      <Pressable style={stlBtnEye} onPress={btnToggle}>
        {sttShowPass ? <EyeOpen /> : <EyeClose />}
      </Pressable>
    </>
  );
};

const EyeOpen = () => (
  <SvgView1
    pass={{
      componentSvg: (Svg: any, SvgObj: any) => {
        const { Path } = SvgObj;
        return () => (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            viewBox="0 0 20 16"
          >
            <Path
              fill="#444"
              fillRule="evenodd"
              d="M10 2C6.767 2 3.96 4.31 2.205 7.796a12.61 12.61 0 0 0-.1.204l.032.068.068.136C3.96 11.69 6.767 14 10 14c3.233 0 6.04-2.31 7.795-5.796l.068-.136.032-.068a1.847 1.847 0 0 0-.032-.068l-.068-.136C16.04 4.31 13.233 2 10 2ZM.418 6.896C2.358 3.044 5.72 0 10 0c4.28 0 7.642 3.044 9.581 6.896l.022.043c.091.18.21.412.262.7.042.227.042.495 0 .723-.053.287-.17.519-.262.7l-.022.042C17.641 12.956 14.281 16 10 16 5.72 16 2.358 12.956.418 9.104a15.392 15.392 0 0 0-.021-.043c-.092-.18-.21-.412-.262-.7a2.097 2.097 0 0 1 0-.723 2.523 2.523 0 0 1 .283-.742ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
              clipRule="evenodd"
            />
          </Svg>
        );
      },
      altura: '',
      largura: '',
      preenchimento: [''],
      svgOriginal: '',
      args: {},
    }}
  />
);

const EyeClose = () => (
  <SvgView1
    pass={{
      componentSvg: (Svg: any, SvgObj: any) => {
        const { Path } = SvgObj;
        return () => (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            viewBox="0 0 20 16"
          >
            <Path
              fill="#444"
              fillRule="evenodd"
              d="M1.614.21A1 1 0 0 0 .386 1.79l2.278 1.77c-.88.985-1.633 2.12-2.245 3.336l-.022.043c-.091.18-.21.412-.262.7a2.097 2.097 0 0 0 0 .723c.053.287.17.519.262.7l.022.042C2.359 12.956 5.719 16 10 16c2.231 0 4.213-.827 5.874-2.165l2.512 1.954a1 1 0 1 0 1.228-1.578l-18-14Zm12.627 12.355-1.798-1.398a4 4 0 0 1-6.115-4.756L4.245 4.79c-.778.849-1.466 1.864-2.04 3.005a12.547 12.547 0 0 0-.1.204l.032.068.068.136C3.96 11.69 6.767 14 10 14c1.531 0 2.967-.518 4.241-1.435ZM8.02 7.725a2 2 0 0 0 2.735 2.127L8.019 7.727Z"
              clipRule="evenodd"
            />
            <Path
              fill="#0F1729"
              d="M8.95 4.14 14 8.065V8a4 4 0 0 0-5.05-3.86Z"
            />
            <Path
              fill="#0F1729"
              d="M17.795 8.204a14.2 14.2 0 0 1-1.155 1.915l1.578 1.228c.51-.701.967-1.455 1.364-2.243l.021-.043c.092-.18.21-.412.262-.7a2.094 2.094 0 0 0 0-.723c-.052-.287-.17-.52-.262-.7l-.021-.042C17.642 3.044 14.28 0 10 0 8.285 0 6.717.489 5.33 1.323l1.729 1.345A6.889 6.889 0 0 1 10 2c3.233 0 6.04 2.31 7.795 5.796l.068.136.032.068a1.8 1.8 0 0 1-.032.068l-.068.136Z"
            />
          </Svg>
        );
      },
      altura: '',
      largura: '',
      preenchimento: [''],
      svgOriginal: '',
      args: {},
    }}
  />
);

