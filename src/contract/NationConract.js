export const NATION_ADDRESS = '0x10D55a3ed8047B0843c1592fC768A01f8ad91D9f' 

export const NATION_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "record_found",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "Criminal_Record",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "marks",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "percentage",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "Educations",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "boy_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "boy_cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "girl_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "girl_cnic",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "Marriage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vehicle_no",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "challan_type",
				"type": "string"
			}
		],
		"name": "PayChallan",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vehicle_no",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "challan_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "Traffic_Challan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "f_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "m_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "f_cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "m_cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dob",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "Union_Concil",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "weapon_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lisence_no",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "Weapon_Lisence",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			}
		],
		"name": "getCitizen",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "f_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "m_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "f_cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "m_cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "dob",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					}
				],
				"internalType": "struct Nation.UnionConcil",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "marks",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "prcentage",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "grade",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "passedSSC",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "passedHSC",
						"type": "bool"
					}
				],
				"internalType": "struct Nation.Educaion[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "vehicle_no",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "challan_type",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					}
				],
				"internalType": "struct Nation.TrafficChallan[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "record_found",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "remarks",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					}
				],
				"internalType": "struct Nation.CriminalRecord[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "weapon_type",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lisence_no",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "weapon_issued",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct Nation.WeaponLisence",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCriminalRecords",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "record_found",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "remarks",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					}
				],
				"internalType": "struct Nation.CriminalRecord[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEducations",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "marks",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "prcentage",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "grade",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "passedSSC",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "passedHSC",
						"type": "bool"
					}
				],
				"internalType": "struct Nation.Educaion[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPaidTrafficChallan",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "vehicle_no",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "challan_type",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					}
				],
				"internalType": "struct Nation.TrafficChallan[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPendingTrafficChallan",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "vehicle_no",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "challan_type",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					}
				],
				"internalType": "struct Nation.TrafficChallan[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUnionConcil",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "f_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "m_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "f_cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "m_cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "dob",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					}
				],
				"internalType": "struct Nation.UnionConcil[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWeaponLisence",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "weapon_type",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lisence_no",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "weapon_issued",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct Nation.WeaponLisence[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
