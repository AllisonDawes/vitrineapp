import React, {
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User | undefined;
  signIn(credentials: SignInCredentials): Promise<void>;
  logOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>();

  useEffect(() => {
    async function loadStorageData() {
      const [token, user] = await AsyncStorage.multiGet([
        "@vitrine:token",
        "@vitrine:user",
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      console.log({ email, password });
      console.log(response.data);

      const { token, user } = response.data;

      await AsyncStorage.setItem("@vitrine:token", token);
      await AsyncStorage.setItem("@vitrine:user", JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    } catch (err) {
      Alert.alert(
        "Aviso!",
        "Combinação de email/senha incompativeis, verifique suas credênciais!"
      );
    }
  }, []);

  const logOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@vitrine:token", "@vitrine:user"]);

    setData({
      token: "",
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        admin: false,
      },
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data?.user,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
