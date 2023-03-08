import { DataService } from '../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: any[] = [];
  chosenPokemons: any[] = [];


  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void{
    this.dataService.getPokemons().subscribe((response:any)=>{

      response.results.forEach((result:any) =>{
        this.dataService.getPokemonData(result.name).subscribe((response:any)=>{
        this.pokemons.push(response);
        });
      });

    });}

  chose_pokemon(name:any){
    this.dataService.getPokemonData(name).subscribe((response:any)=>{
      console.log(response);
      this.chosenPokemons = [];
      this.chosenPokemons.push(response);
    }
      )};

  }
