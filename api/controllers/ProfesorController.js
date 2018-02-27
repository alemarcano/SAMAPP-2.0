/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	newP: function (req, res){
		console.log('entra al registro');
		res.view();
	},


	create: function(req,res){
		//body
		var userObj ={

			cedula: req.param('cedula'),
			nombre: req.param('nombre'),
			apellido: req.param('apellido'),
			correo: req.param('correo'),
			telefono: req.param('telefono'),
			especialidad: req.param('especialidad'),
		}
		Profesor.create(userObj,function(err,user){
			if (err){
				return res.redirect('profesor/newP');
			}

		res.redirect('profesor/show/'+profesor.id);


		})


	},

		show: function(req,res, next){
		//body
		Profesor.findOne(req.param('id'), function profesorFounded(err,user) {
			if (err)
				return next(err);
		
			res.view({
				profesor: profesor
			});

		});
	},

	edit: function(req,res,next){
		//body
		User.findOne(req.param('id'), function profesorFounded(err,user) {
			if (err)
				return next(err);
			if(!profesor)
				return next();
			res.view({
				profesor: profesor
			});

		});
	},


	
};

