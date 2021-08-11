export default (state, action) => {
    switch(action.type) {
      
      /*case 'VOTE_101':
        return {
          ...state,
          count101: action.payload
        }

        case 'AMOUNT_OUT':
          return {
            ...state,
            price: action.payload
          }
          

          case 'SETUPBLOCK':
          return {
            ...state,
            block: action.payload
          }*/


      case 'GETCOUNCILDATA':
          return {
            ...state,
            getCouncilArray:  [action.payload, ...state.getCouncilArray],
      }

      case 'GETWEAPONLISENCEDATA':
        return {
          ...state,
          getWeaponLisence:  [action.payload, ...state.getWeaponLisence],
    }

 
    case 'GETCRIMINALDATA':
      return {
        ...state,
        getCriminalRecord:  [action.payload, ...state.getCriminalRecord],
  }

  case 'GETPENDINGTRAFFICCHALLAN':
    return {
      ...state,
      getPendingTrafficChallan:  [action.payload, ...state.getPendingTrafficChallan],
}

case 'GETPAIDTRAFFICCHALLAN':
  return {
    ...state,
    getPaidTrafficChallan:  [action.payload, ...state.getPaidTrafficChallan],
}

  case 'GETEDUCATIONDATA':
    return {
      ...state,
      getEducation:  [action.payload, ...state.getEducation],
}

      case 'GETCITIZENDATA':
        return {
          ...state,
          citizen_UnionCouncil: [action.payload, ...state.citizen_UnionCouncil],
          }
          
      case 'GETCITIZENEDUCATION':
        return {
          ...state,
          citizen_Education: [action.payload, ...state.citizen_Education],  
        }
        
      case 'GETCITIZENCRIMINAL':
        return {
          ...state,
          citizen_CriminalRecord: [action.payload, ...state.citizen_CriminalRecord],  
        }

        
      case 'GETCITIZENWEAPON':
        return {
          ...state,
          citizen_Weapon: [action.payload, ...state.citizen_Weapon],  
        }

        
      case 'GETCITIZENTRAFFIC':
        return {
          ...state,
          citizen_TrafficChallan: [action.payload, ...state.citizen_TrafficChallan],  
        }


      case 'SETUP_WEB3':
        return {
          ...state,
          web3: action.payload,
          web3LoadingErrorMessage: "",
          web3Loadded: true
        }
      case 'SETUP_CONTRACT':
        return {
          ...state,
          contract: action.payload
        }


      case 'ADD_ETHEREUM_ACCOUNTS':
        return {
          ...state,
          accounts: action.payload
        }
      case 'WEB3_LOADING_ERROR':
        return {
          ...state,
          web3LoadingErrorMessage: action.errorMessage,
          web3Loadded: false
        }
      default:
        return state;
    }
  }