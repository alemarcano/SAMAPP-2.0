module.exports = {

	newEs: function (req, res){
		console.log('entra al registro est');
		res.view();
	},

	create: function(req,res){
		//body
		var estObj ={
			cedula: req.param('cedula'), 
			nombre: req.param('nombre'),
			apellido: req.param('apellido'),
			email: req.param('email'),
			telefono: req.param('telefono'),
			carrera: req.param('carrera'),
		}
		User.create(estObj,function(err,estudiante){
			if (err){
				return res.redirect('estudiante/newEs');
			}

		res.redirect('estudiante/showEs/'+estudiante.id);


		})


	},

	showEs: function(req,res, next){
		//body
		Estudiante.findOne(req.param('id'), function estudianteFounded(err,estudiante) {
			if (err)
				return next(err);
		
			res.view({
				estudiante: estudiante
			});

		});
	},

	editEs: function(req,res,next){
		//body
		Estudiante.findOne(req.param('id'), function estudianteFounded(err,estudiante) {
			if (err)
				return next(err);
			if(!estudiante)
				return next();
			res.view({
				estudiante: estudiante
			});

		});
	},

	update: function(req,res, next){
		//body
		var estObj ={

			cedula: req.param('cedula'), 
			nombre: req.param('nombre'),
			apellido: req.param('apellido'),
			email: req.param('email'),
			telefono: req.param('telefono'),
			carrera: req.param('carrera'),
		}

		Estudiante.update(req.param('id'),estObj, function estudianteUpdated(err, estudiante) {
			if (err){
				req.session.flash = {
					err: err
				}
				return res.redirect('estudiante/editEs/' + req.param('id'));		
			}

			res.redirect('estudiante/showEs/'+ req.param('id'));

		});


	},

	indexEs: function(req, res, next){
		Estudiante.find(function estudianteFounded(err, users){
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
				estudiante: estudiante
			});
			
		});

	},

	destroy: function(req, res, next){
		Estudiante.destroy(req.param('id'),function estudianteDestroyed(err, users){
			if(err){
				console.log(err);
				return next(err);
			}
			res.redirect('/estudiante/indexEs');
			
		});

	}	


	
};
