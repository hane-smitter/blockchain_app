import {getAllEducation,getAllTraffic,getAllWeapon,getAllCriminal,getPaidTrafficChallanData,getPendingTrafficChallanData,getEducationData,getCitizenData,getCriminalData,getWeaponData ,getCouncilData,setupWeb3, setupContract, addEthereumAccounts, web3LoadingError } from "./actions";
import Web3 from "web3";
import { NATION_ABI, NATION_ADDRESS } from '../contract/NationConract';




  
export const loadBlockchain = async(dispatch) =>{

   
    try {

      
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);

        if(Web3.givenProvider){
        
            
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
           // web3.eth.getBlockNumber().then((res)=>dispatch(setBlock(res)))
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(NATION_ABI,NATION_ADDRESS);
            dispatch(setupContract(contract));
        
            
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            console.log("contract = ",contract);
            console.log("contract.methods = ",contract.methods);
            
            let getUnionConcilDat = await contract.methods.getUnionConcil().call()
            console.log("hello = "+getUnionConcilDat);
            dispatch(getCouncilData(getUnionConcilDat))

            
            let getWeaponLisenceDat = await contract.methods.getWeaponLisence().call()
            console.log("hello = "+getWeaponLisenceDat);
            dispatch(getWeaponData(getWeaponLisenceDat))

            let getCriminalRecordDat = await contract.methods.getCriminalRecords().call()
            console.log("hello = "+getCriminalRecordDat);
            dispatch(getCriminalData(getCriminalRecordDat))

            
            let getEducationDat = await contract.methods.getEducations().call()
            console.log("hello = "+getEducationDat);
            dispatch(getEducationData(getEducationDat))

            
            let getPendingChallanDat = await contract.methods.getPendingTrafficChallan().call()
            console.log("hello = "+getPendingChallanDat);
            dispatch(getPendingTrafficChallanData(getPendingChallanDat))

            
            let getPaidChallanDat = await contract.methods.getPaidTrafficChallan().call()
            console.log("hello = "+getPaidChallanDat);
            dispatch(getPaidTrafficChallanData(getPaidChallanDat))
        
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            
            dispatch(web3LoadingError(error.message));
        }
    }
}




export const AddWeaponLisence = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.Weapon_Lisence(transaction.cnic,transaction.weapon_type,transaction.lisence_no,transaction.date)
    .send({
        from : accounts[0]
        
    });
    console.log("after  transaction ", receipt);
    
}

export const AddMarriage = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.Marriage(transaction.boy_name,transaction.boy_cnic,transaction.girl_name,transaction.girl_cnic,transaction.date)
    .send({
        from : accounts[0]
        
    });
    console.log("after  transaction ", receipt);
    
}


export const AddTrafficChallan = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.Traffic_Challan(transaction.cnic,transaction.vehicle_no,transaction.challan_type,transaction.amount,transaction.date)
    .send({
        from : accounts[0]
        
    });
    console.log("after  transaction ", receipt);
    
}


export const AddPayChallan = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.PayChallan(transaction.cnic,transaction.vehicle_no,transaction.date,transaction.challan_type)
    .send({
        from : accounts[0],
        value: transaction.challan_fee
    });
    console.log("after  transaction ", receipt);
    
}

export const AddEducation = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.Educations(transaction.cnic,transaction.subject,transaction.marks,transaction.percentage,transaction.grade,transaction.date)
    .send({
        from : accounts[0]
        
    });
    console.log("after  transaction ", receipt);
    
}


export const AddUnionCouncil = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction")
    console.log((transaction.cnic))
    const receipt =  await contract.methods.Union_Concil(transaction.name,transaction.cnic,transaction.f_name,transaction.m_name,transaction.f_cnic,transaction.m_cnic,transaction.gender,transaction.dob,transaction.city)
    .send({
        from : accounts[0]
        
    });
    console.log("after  transaction ", receipt);
    
}


export const AddCriminalRecord = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.Criminal_Record(transaction.cnic,transaction.remarks,transaction.record_found,transaction.date)
    .send({
        from : accounts[0]
        
    });
    console.log("after  transaction ", receipt);
    
}


export const getCitizens = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    let receipt = await contract.methods.getCitizen(transaction.cnic).call({from : accounts[0]})
    console.log("after  transaction ", receipt)
    dispatch(getCitizenData(receipt[0]))
    dispatch(getAllEducation(receipt[1]))
    dispatch(getAllWeapon(receipt[4]))  
    dispatch(getAllCriminal(receipt[3]))  
    dispatch(getAllTraffic(receipt[2]))    
}


