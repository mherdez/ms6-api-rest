import { useEffect, useState } from 'react';

export const Promesas = () => {
	// const URL_REQRES_API = 'https://reqres.in/api/user/2';
	// const URL_REQRES_API = 'https://reqres.in/api/users?page=2';
	// const URL_RANDOM_USERS = 'https://randomuser.me/api/'; // UN USUARIO
	const URL_RANDOM_USERS =
		'https://randomuser.me/api/?results=10'; // Varios Usuarios

	const [usuarios, setUsuarios] = useState([]);

	// const usuariosLocales = [
	// 	{
	// 		id: 1,
	// 		name: 'Esteban',
	// 		year: 2001,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Anastasia',
	// 		year: 2001,
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Margarita',
	// 		year: 2001,
	// 	},
	// ];

	// const cargarUsuariosPromise = () => {
	// 	fetch(URL_REQRES_API).then((respuesta) =>
	// 		respuesta.json().then(({ data }) => setUsuarios(data))
	// 	);
	// };

	// const cargarUsuariosAsyncAwait = async () => {
	// 	const respuesta = await fetch(URL_REQRES_API);
	// 	const { data } = await respuesta.json();
	// 	setUsuarios(data);
	// };

	const cargarUsuariosAsyncAwaitRandom = async () => {
		try {
			const respuesta = await fetch(URL_RANDOM_USERS);
			const { results } = await respuesta.json();
			setUsuarios(results);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		// cargarUsuariosPromise();
		// cargarUsuariosAsyncAwait();
		cargarUsuariosAsyncAwaitRandom();
	}, []);

	return (
		<>
			<h5>Promesas</h5>
			<ul>
				{/* REQRES */}
				{/* {usuarios.map((usuario) => (
					<li key={usuario.id}>
						<img
							src={usuario.avatar}
							alt={`${usuario.first_name} ${usuario.last_name}`}
						/>
						<div className='nombre'>
							{`${usuario.first_name} ${usuario.last_name}`}
						</div>
					</li>
				))} */}
				{/* RANDOM USERS */}
				{usuarios.map(({ login, name, picture, cell }) => (
					<li key={login.uuid}>
						<img
							src={picture.medium}
							alt={`${name.first} ${name.last}`}
						/>
						<div className='nombre'>
							<p>
								{name.first} {name.last}
							</p>
							<small>{cell}</small>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};
