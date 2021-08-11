/*export const vote_101 = (transaction)=> {
    return {
        type: 'VOTE_101',
        payload: transaction
    };
}

export const amountOut = (transaction)=> {
    return {
        type: 'AMOUNT_OUT',
        payload: transaction
    };
}

export const setBlock = (web3) => {
    return {
        type: 'SETUPBLOCK',
        payload: web3
    };
}*/

export const getCouncilData = (web3) => {
    return {
        type: 'GETCOUNCILDATA',
        payload: web3
    };
}

export const getWeaponData = (web3) => {
    return {
        type: 'GETWEAPONLISENCEDATA',
        payload: web3
    };
}

export const getCitizenData = (web3) => {
    return {
        type: 'GETCITIZENDATA',
        payload: web3
    };
    
}


export const getAllCriminal = (web3) => {
    return {
        type: 'GETCITIZENCRIMINAL',
        payload: web3
    };
    
}


export const getAllEducation = (web3) => {
    return {
        type: 'GETCITIZENEDUCATION',
        payload: web3
    };
    
}


export const getAllTraffic = (web3) => {
    return {
        type: 'GETCITIZENTRAFFIC',
        payload: web3
    };
    
}


export const getAllWeapon = (web3) => {
    return {
        type: 'GETCITIZENWEAPON',
        payload: web3
    };
    
}

export const getCriminalData = (web3) => {
    return {
        type: 'GETCRIMINALDATA',
        payload: web3
    };
    
}

export const getEducationData = (web3) => {
    return {
        type: 'GETEDUCATIONDATA',
        payload: web3
    };
    
}


export const getPendingTrafficChallanData = (web3) => {
    return {
        type: 'GETPENDINGTRAFFICCHALLAN',
        payload: web3
    };
    
}

export const getPaidTrafficChallanData = (web3) => {
    return {
        type: 'GETPAIDTRAFFICCHALLAN',
        payload: web3
    };
    
}

export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
}

export const setupContract = (contract) => {
    return {
        type: 'SETUP_CONTRACT',
        payload: contract
    };
}


export const addEthereumAccounts = (accounts) => {
    return {
        type: 'ADD_ETHEREUM_ACCOUNTS',
        payload: accounts
    };
}

export const web3LoadingError = (errorMessage) => {
    return {
        type: 'WEB3_LOADING_ERROR',
        errorMessage: errorMessage
    };
}