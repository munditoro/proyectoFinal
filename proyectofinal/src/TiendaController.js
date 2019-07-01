import { extendObservable } from 'mobx';
import platillos from './firebaseController';

class TiendaController{
	constructor(){

		let self = this;

		platillos.once('value').then(function(snapshot){
			console.log(snapshot);
			snapshot.forEach(function(childSnapshot){
				const key = childSnapshot.key;
				const value = childSnapshot.val();
				self.platillos.push(value);
			})
		});

		extendObservable(this,
			{
				platillos : [],
				bebidas : []
			});
	}


	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach(
			(value,index)=>{
								if(indicePlatillo === index){
									this.platillos[index].cantidad = cantidadPlatillo
								}
							}
		)
	}

	bebidasEnLaOrden(indiceBebida, cantidadBebida){
		this.bebidas.forEach(
			(value,index)=>{
								if(indiceBebida === index){
									this.bebidas[index].cantidad = cantidadBebida
								}
							}
		)
	}
}

var VarTiendaController = new TiendaController;
export default VarTiendaController;