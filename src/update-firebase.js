const { initializeApp } = require('firebase/app');
const { getFirestore, doc, updateDoc } = require('firebase/firestore');

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaZlTO1nedyM_hDmbFHEkQ0N8bQ9JkWLw",
  authDomain: "flaxboll.firebaseapp.com",
  projectId: "flaxboll",
  storageBucket: "flaxboll.appspot.com",
  messagingSenderId: "707022923688",
  appId: "1:707022923688:web:62d8bd5e16f18da3d69f9d",
  measurementId: "G-FEXXR0BBNQ"
};

// Inicialize o Firebase
initializeApp(firebaseConfig);

// Obtenha a referência do Firestore
const db = getFirestore();

const updateQrCode = async () => {
  const userId = process.env.USERID;
  const projectId = process.env.PROJECTID;
  const qrCodeUrl = process.env.QR_CODE_URL;

  const docRef = doc(db, 'users', userId, 'projects', projectId);
  await updateDoc(docRef, {
    qrCodeUrl
  });

  console.log('QR Code updated successfully.');
};

updateQrCode().catch(console.error);
