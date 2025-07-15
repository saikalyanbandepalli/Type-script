    class user{
        private userid:string ="admin@gmail.com";
        private password:string = "password";

        get _userid(){
            return this.userid;
        }
        set _userid(val: any){
            this.userid = this.userid;
        }

         get pass(){
            return this.password;
        }
        set pass(val:any){
            this.password = this.password;
        }

        userDetails(){
            return `userid:${this.userid} ${this.password}`;
        }
        
    }

    let userobj = new user();
    console.log(userobj._userid);
    console.log(userobj.pass);