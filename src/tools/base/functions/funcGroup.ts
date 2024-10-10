
type Tprops_funcGroup = { args: any; pass: { arrFunctions: any[] } };
export const funcGroup = async (props: Tprops_funcGroup) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { arrFunctions } = pass;

  // ---------- set Execute Funcs
  for (const currFunc of arrFunctions) await currFunc(args);
};

