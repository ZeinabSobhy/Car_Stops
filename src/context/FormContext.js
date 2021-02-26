import React, { useState } from 'react';

const FormContext = React.createContext([{}, () => {}]);

const FormProvider = ({ children }) => {
    const [sentRequest, setSentRequest] = useState(false);

    return (
        <FormContext.Provider value={[sentRequest, setSentRequest]}>{children}</FormContext.Provider>
    );
};

export { FormProvider, FormContext };
