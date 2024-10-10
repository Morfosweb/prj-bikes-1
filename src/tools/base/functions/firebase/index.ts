
// ---------- import Local Tools
import { fireInit } from './fireInit';
// const fireInit = () => console.log('fireInit');

import { uploadFile } from './uploadFile';
// const uploadFile = () => console.log('uploadFile');

import { updateDoc } from './updateDoc';
// const updateDoc = () => console.log('updateDoc');

import { getDocs } from './getDocs';
// const getDocs = () => console.log('getDocs');

import { getDoc } from './getDoc';
// const getDoc = () => console.log('getDoc');

import { deleteDoc } from './deleteDoc';
// const deleteDoc = () => console.log('deleteDoc');

import { setDoc } from './setDoc';
// const setDoc = () => console.log('setDoc');

import { whereConds } from './whereConds';
// const whereConds = () => console.log('whereConds');

import { where } from './where';
// const where = () => console.log('where');

export const firebase = {
  fireInit,

  uploadFile,

  getDoc,
  getDocs,
  updateDoc,

  deleteDoc,
  setDoc,

  whereConds,
  where,
};

