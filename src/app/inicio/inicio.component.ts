import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthWeb3Service } from 'src/services/auth-web3.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //INTERPOLACIÓN
  title = "Votaciones personalizables en Blockchain";


  //Conectar cuenta
  loginUser = false;
  addressUser = "";
  addressUserView = false;

  web3: any;

  constructor(private cdr: ChangeDetectorRef, private authWeb3Srv: AuthWeb3Service) {
    this.web3 = this.authWeb3Srv.web3Instance;
    console.log(this.web3);
  }

  connect() {
    this.authWeb3Srv.connect();
  }

  ngOnInit(): void {
    this.authWeb3Srv.loginUser.subscribe((res: boolean) => {
      this.loginUser = res;
      (!this.loginUser) ? this.addressUserView = false : this.addressUserView = true;
      this.cdr.detectChanges();
    });
    this.authWeb3Srv.addressUser.subscribe((res: string) => {
      this.addressUser = res;
      this.cdr.detectChanges();
    })
  }



}
