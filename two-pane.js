Vue.component('two-pane', {
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
    <el-container>
      <el-header>
        <img src="img/logo.png" height="60" align="left">
      </el-header>
    <el-container>
      <el-aside>
        <el-col :span="6">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <router-link to="/login"><i class="fas fa-sign-in-alt fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/location"><i class="fas fa-building fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="6">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="7">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="8">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="9">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="10">
              <router-link to="/bar"><i class="fas fa-bars fa-2x"></i></router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
	`
})
