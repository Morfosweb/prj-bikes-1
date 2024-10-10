        // ---------- import React Packs
        import React from 'react';
        import * as RN from 'react-native';

        // ---------- import Variables Pack
        import { create } from 'zustand';

        // ---------- import Local Tools

        // ---------- set Caps Inputs
        const currRoute = ''

        let args:any = []

        const screens = []

        const initCt = () => ({});
        const initObj = initCt();

        const arrInitFuncs = [];

        export const useRoutes = create(() => ({ currRoute }));
        export const useData = create(() => initObj);

        // ---------- set Main Component
        export const Router = () => {
          return (<RN.Text>Base Project...</RN.Text>);
      };
