import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuth = () => {
  const info = authStorage();

  return {
    getInfo,
    logOut,
    logIn,
    ...info,
  };
};

const authStorage = create(
  persist(
    (set, get) => ({
      id: null,
      username: "",
      firstName: "",
      lastName: "",
      maidenName: "",
      age: null,
      gender: "",
      email: "",
      phone: "",
      birthDate: "",
      image: "",
      bloodGroup: "",
      height: null,
      weight: null,
      eyeColor: "",
      hair: { color: "", type: "" },
      address: {
        address: "",
        city: "",
        state: "",
        stateCode: "",
        postalCode: "",
        coordinates: { lat: null, lng: null },
        country: "",
      },
      macAddress: "",
      university: "",
      bank: {
        cardExpire: "",
        cardNumber: "",
        cardType: "",
        currency: "",
        iban: "",
      },
      company: {
        department: "",
        name: "",
        title: "",
        address: {
          address: "",
          city: "",
          state: "",
          stateCode: "",
          postalCode: "",
          coordinates: { lat: null, lng: null },
          country: "",
        },
      },
      ein: "",
      ssn: "",
      userAgent: "",
      crypto: { coin: "", wallet: "", network: "" },
      role: "",
      token: "",
      isAuthenticated: false,
      loading: false,
      setInfo: (info) => set({ ...info, isAuthenticated: true }),
      clearInfo: () =>
        set({
          id: null,
          username: "",
          firstName: "",
          lastName: "",
          maidenName: "",
          age: null,
          gender: "",
          email: "",
          phone: "",
          birthDate: "",
          image: "",
          bloodGroup: "",
          height: null,
          weight: null,
          eyeColor: "",
          hair: { color: "", type: "" },
          address: {
            address: "",
            city: "",
            state: "",
            stateCode: "",
            postalCode: "",
            coordinates: { lat: null, lng: null },
            country: "",
          },
          macAddress: "",
          university: "",
          bank: {
            cardExpire: "",
            cardNumber: "",
            cardType: "",
            currency: "",
            iban: "",
          },
          company: {
            department: "",
            name: "",
            title: "",
            address: {
              address: "",
              city: "",
              state: "",
              stateCode: "",
              postalCode: "",
              coordinates: { lat: null, lng: null },
              country: "",
            },
          },
          ein: "",
          ssn: "",
          userAgent: "",
          crypto: { coin: "", wallet: "", network: "" },
          role: "",
          token: "",
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage", 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);

const logIn = async (data) => {
  const response = await axios.post("https://dummyjson.com/auth/login", {
    username: data.username,
    password: data.password,
    expiresInMins: 30,
  });
  authStorage.getState().setInfo(response.data);
};

const logOut = async () => {
  authStorage.getState().clearInfo();
};

const getInfo = async () => {
  const authToken = authStorage.getState().token;
  try {
    authStorage.getState().setInfo({ loading: true });
    const authorization = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    authStorage.getState().setInfo({ loading: false, ...authorization.data });
  } catch {
    logOut();
  }
};
