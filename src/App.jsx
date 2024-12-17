import { h } from 'preact';
import { useState } from 'preact/hooks';

const App = () => {
	const [todos] = useState([
		'Aprender Preact',
		'Configurar Vite',
		'Crear un componente TODO',
		'Ejecutar entorno de desarrollo',
		'Generar el build optimizado'
	]);

	return (
		<div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '2rem' }}>
			<h1>Mi Lista de TODO</h1>
			<ul style={{ listStyle: 'none', padding: 0 }}>
				{todos.map((todo, index) => (
					<li
						key={index}
						style={{
							margin: '10px 0',
							padding: '10px',
							background: '#f0f0f0',
							borderRadius: '5px',
							boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
						}}
					>
						{todo}
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
