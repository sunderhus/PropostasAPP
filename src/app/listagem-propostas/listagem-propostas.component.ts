import {
  Component,
  OnInit
} from '@angular/core';
import { PropostaService } from './../service/proposta.service';

@Component({
  selector: 'app-listagem-propostas',
  templateUrl: './listagem-propostas.component.html',
  styleUrls: ['./listagem-propostas.component.scss']
})
export class ListagemPropostasComponent implements OnInit {
  propostas: Array <any>;
  readonly _propostaService: PropostaService;
  
  constructor(private propostaService: PropostaService) {
    this._propostaService = propostaService;
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this._propostaService.listarPropostas()
      .subscribe(dados => this.propostas = dados);
  }
}
