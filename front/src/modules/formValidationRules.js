const formRules = [
  	{ 
		field: 'email', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Email is required.' 
  	},
  	{ 
		field: 'email',
		method: 'isEmail', 
		validWhen: true, 
		message: 'That is not a valid email.'
  	},
  	{ 
		field: 'login', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a login.'
  	},
 	{ 
		field: 'firstName', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a first name.'
  	},
	{ 
		field: 'firstName', 
		method: 'matches', 
		validWhen: true, 
		args: [/^[a-zA-Zа-яА-Я]+$/],
		message: 'Must be a string'
	},
  	{ 
		field: 'lastName', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Please provide a last name.'
  	},
  	{ 
		field: 'lastName', 
		method: 'matches', 
		validWhen: true, 
		args: [/^[a-zA-Zа-яА-Я]+$/],
		message: 'Must be a string'
	},
	{ 
		field: 'oldPassword', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Password is required.'
	},
	{ 
		field: 'newPassword1', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Password is required.'
	},
	{ 
		field: 'newPassword2', 
		method: 'isEmpty', 
		validWhen: false, 
		message: 'Password is required.'
	},
]

export default formRules;