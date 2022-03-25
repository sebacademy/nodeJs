const geocode = (address, callback)=>{
	setTimeout(()=>{
		const data = {
			latitude: 0,
			longitude: 0
		};
		callback(data)
	},2000);
};

geocode('Fill', (data)=>{
	console.log(data);
})