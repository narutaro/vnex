Vue.component('login', {
	data() {
		return {
			form: {
				name: '',
				password: ''
			}
		}
	},
	methods: { 
  	onSubmit() {
			console.log(this.form);

function createURLSearchParams(data) {
  const params = new URLSearchParams();
  Object.keys(data).forEach(key => params.append(key, data[key]));
  return params;
}

const login_url = base_url + "glass/login-handler";
const data = { "username": this.form.name, "password": this.form.password, "destination": "" };
const params = createURLSearchParams(data);
const opt = { mode: 'cors', method: 'post', credentials: 'include', body: params };

fetch(login_url, opt).then(function(response) {
  //console.log(response); 
  console.log('header:' + response.headers.get('Server')); 
  console.log('cookie-header:' + response.headers.get('Set-Cookie')); 
});

		}
	},
	template: `
<div id="app">
<el-card class="box-card login">
  <div slot="header" class="clearfix">
    <span>Login</span>
    <el-button style="float: right; padding: 3px 0" type="text">Forget password</el-button>
  </div>
  <el-form ref="form" :model="form" label-width="80px">
    </el-form-item>
      <el-form-item label="Name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    </el-form-item>
      <el-form-item label="Password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="float: right" type="primary" @click="onSubmit">Login</el-button>
    </el-form-item>
  </el-form>
</el-card>
</div>
	`
})
