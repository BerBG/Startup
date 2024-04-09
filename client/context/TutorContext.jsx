import React, { createContext } from "react";
import { tutor_list } from '../src/assets/assets.js'

export const TutorContext = createContext(null);

const TutorContextProvider = (props) => {
    const contextValue = {
        tutor_list
    };

    return (
        <TutorContext.Provider value={contextValue}>
            {props.children}
        </TutorContext.Provider>
    );
};

export default TutorContextProvider;
