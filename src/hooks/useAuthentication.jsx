import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // Cleanup
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if(cancelled) {
      return;
    }
  }

  const createUser = async data => {
    checkIfIsCancelled();

    setLoading(true);
    setError("");

    try {

      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.name
      })

      setLoading(false);

      return user;

    } catch(err) {
      let systemErrorMessage;

      if(err.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
      } else if(err.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado"
      } else {
        systemErrorMessage = "Ocorreu um erro! Por favor, tente mais tarde."
      }
      setError(systemErrorMessage);
      setLoading(false);
    }
  }

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
    console.log("Saiu")
  }

  const login = async data => {
    checkIfIsCancelled();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch(err) {
      let systemErrorMessage;
      if(err.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado."
      } else if(err.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta."
      } else {
        systemErrorMessage = "Ocorreu um erro! Tente mais tarde."
      }
      setError(systemErrorMessage);
      setLoading(false)
    }
  }

  // Limpando a memória;
  useEffect(() => {
    return () => setCancelled(true);
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  }

}

