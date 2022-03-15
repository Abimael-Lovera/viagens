export function Pedido() {
	return (
		<>
			<form>
				<div classNameName='mb-3'>
					<label htmlFor='exampleInputEmail1' classNameName='form-label'>
						Nome
					</label>
					<input
						type='email'
						classNameName='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
				</div>
				<div classNameName='mb-3'>
					<label htmlFor='exampleInputPassword1' classNameName='form-label'>
						Email
					</label>
					<input
						type='password'
						classNameName='form-control'
						id='exampleInputPassword1'
					/>
				</div>

				<div classNameName='mb-3'>
					<label htmlFor='exampleInputPassword1' classNameName='form-label'>
						Destino
					</label>
					<input
						type='password'
						classNameName='form-control'
						id='exampleInputPassword1'
					/>
				</div>

				<div classNameName='mb-3'>
					<label htmlFor='exampleInputPassword1' classNameName='form-label'>
						Data
					</label>
					<input
						type='date'
						classNameName='form-control'
						id='exampleInputPassword1'
					/>
				</div>
				<button type='submit' classNameName='btn btn-primary'>
					Submit
				</button>
			</form>
			<h3>Table GET</h3>
			{/* // mostrar GET todos los datos */}

			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Nome</th>
						<th scope='col'>Email</th>
						<th scope='col'>Destino</th>
						<th scope='col'>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>Data</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
