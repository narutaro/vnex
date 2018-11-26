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
      <el-aside width="80px">
        <el-col>
          <el-menu default-active="1" class="el-menu-vertical">
            <el-menu-item index="1">
				      <el-tooltip class="item" effect="dark" content="Data centers" placement="right">
                <router-link to="/location"><i class="fas fa-map-marker-alt fa-2x"></i></router-link>
				      </el-tooltip>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/access-request"><i class="fas fa-door-open fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/facility-request"><i class="fas fa-truck-loading fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/delivery-request"><i class="fas fa-truck fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link to="/cabs"><i class="fas fa-server fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="6">
              <router-link to="/monitoring"><i class="fas fa-chart-area fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="7">
              <router-link to="/access-card"><i class="fas fa-address-card fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="8">
              <router-link to="/key-manamgent"><i class="fas fa-key fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="9">
              <router-link to="/remote-hands"><i class="fas fa-hand-point-up fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="10">
              <router-link to="/customer-ticket"><i class="fas fa-headset fa-2x"></i></router-link>
            </el-menu-item>
            <el-menu-item index="11">
              <router-link to="/product-order"><i class="fas fa-shopping-cart fa-2x"></i></router-link>
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
