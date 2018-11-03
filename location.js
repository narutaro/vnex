Vue.component('location-table', {
	data: function() {
		return {
			location: [] 
		}
	},
	created: function() {
		this.getLocation();
	},
	methods: { 
		getLocation: function(){	

			const opt = {mode: 'cors', credentials: 'include'};
			fetch(base_url + "nexcenter-jp/v2/data_centers", opt)

				.then(response => response.json())
				.then(json => {	
					// console.log(JSON.stringify(json));
					//console.log(base_url);
					console.log(json);
					this.location = json;
				});

		}
	},
	template: `
      <el-table :data="location" style="width: 100%">
        <el-table-column prop="globalRef" label="globalRef" width="160"></el-table-column>
        <el-table-column prop="name" label="name" width="180"></el-table-column>
        <el-table-column prop="address.city" label="city" width="120"></el-table-column>
        <el-table-column prop="description" label="description"></el-table-column>
        <el-table-column prop="presence" label="presence"></el-table-column>
      </el-table>
	`
})
