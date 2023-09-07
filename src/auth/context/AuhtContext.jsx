import { createContext } from "react";
export const AuhtContext = createContext();

/*
    context: 
        trabaja con: 
            - AuthProvider (proveedor de contexto)
            - AuhtReducer ( proveedor de acciones sobre el contexto trabajado )
        es proveeido en un punto alto del arbol de la app 
        provee metodos y estados de las variables 
*/
